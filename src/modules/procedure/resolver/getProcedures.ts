import { ForbiddenError } from 'apollo-server';
import { GetProcedures } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const getProcedures: Resolver = async (_, {
  procedureTableId, take,
  cursor,
  filter, fields,
}, { prisma, user }): Promise<GetProcedures> => {
  try {
    const procedures = await prisma.procedure.findMany({
      take,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
      where: {
        accountId: user?.accountId,
        procedureTableId,
        name: { contains: filter },
      },
      orderBy: { name: 'asc' },
      ...fields.select.procedures,
    });

    let ammount = 0;
    if (fields.select.ammount) {
      ammount = await prisma.procedure.count({
        where: {
          accountId: user?.accountId,
          procedureTableId,
          name: { contains: filter },
        },
      });
    }

    return { procedures, ammount };
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar procedimentos');
  }
};

export default getProcedures;
