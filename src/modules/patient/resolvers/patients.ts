import { ForbiddenError } from 'apollo-server';
import { GetPatients } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const getPatients: Resolver = async (_, {
  take = 10,
  cursor,
  filter,
  fields,
}, { prisma, user }): Promise<GetPatients> => {
  try {
    let patients;
    if (fields.select.patients) {
      patients = await prisma.patient.findMany({
        take,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        where: {
          accountId: user?.accountId,
          name: { contains: filter },
        },
        orderBy: { name: 'asc' },
        ...fields.select.patients,
      });
    }

    let ammount = 0;
    if (fields.select.queryInfo) {
      ammount = await prisma.patient.count({
        where: {
          accountId: user?.accountId,
          name: { contains: filter },
        },
      });
    }

    return { patients, queryInfo: { ammount } };
  } catch (e) {
    console.log(e);
    throw new ForbiddenError('Falha ao buscar paciente');
  }
};

export default getPatients;
