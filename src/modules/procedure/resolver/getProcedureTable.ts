import { ForbiddenError } from 'apollo-server';
import { ProcedureTable } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const getProcedureTable: Resolver = async (_, { id, fields }, { prisma, user }): Promise<ProcedureTable> => {
  try {
    const procedureTable = await prisma.procedureTable.findOne({
      where: {
        id,
      },
      ...fields,
    });

    if (!procedureTable || procedureTable.accountId !== user?.accountId) throw new ForbiddenError('Tabela de procedimento não encontrada ou token invalido');

    return procedureTable;
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar tabela de procedinento');
  }
};

export default getProcedureTable;
