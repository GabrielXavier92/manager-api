import { ForbiddenError } from 'apollo-server';
import { ProcedureTable } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const getProcedureTables: Resolver = async (_, { fields }, { prisma, user }): Promise<Array<ProcedureTable>> => {
  try {
    const procedureTables = await prisma.procedureTable.findMany({
      where: {
        accountId: user?.accountId,
      },
      ...fields,
    });

    return procedureTables;
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar tabelas de procedimento');
  }
};

export default getProcedureTables;
