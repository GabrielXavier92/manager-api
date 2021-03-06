import { ForbiddenError } from 'apollo-server';
import { GetProcedures } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const getProcedures: Resolver = async (_, {
  procedureTableId,
  take = 10,
  cursor,
  filter, fields,
}, { prisma, user }): Promise<GetProcedures> => {
  try {
    let procedures;
    if (fields.select.procedures) {
      procedures = await prisma.procedure.findMany({
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
    }

    let ammount = 0;
    if (fields.select.queryInfo) {
      ammount = await prisma.procedure.count({
        where: {
          accountId: user?.accountId,
          procedureTableId,
          name: { contains: filter },
        },
      });
    }

    return { procedures, queryInfo: { ammount } };
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar procedimentos');
  }
};

export default getProcedures;
