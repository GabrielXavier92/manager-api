import { ForbiddenError } from 'apollo-server';
import { ProcedureTable } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const updateProcedureTable: Resolver = async (_, { id, input, fields }, { prisma, user }): Promise<ProcedureTable> => {
  try {
    const procedureTable = await prisma.procedureTable.update({
      where: { id },
      data: { ...input },
      ...fields,
    });

    if (!procedureTable || procedureTable.accountId !== user?.accountId) throw new ForbiddenError('Tabela de procedimento não encontrado ou token invalido');

    return procedureTable;
  } catch (e) {
    throw new ForbiddenError('Falha ao editar tabela de procedimentos');
  }
};

export default updateProcedureTable;
