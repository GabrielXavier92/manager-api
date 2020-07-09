import { UserInputError } from 'apollo-server';

import { Resolver } from '../../../types/graphql-utils';
import { ProcedureTable } from '../../../types/types';

const createProcedureTable: Resolver = async (_, { input }, { prisma, user }) : Promise<ProcedureTable> => {
  try {
    const procedureTable = await prisma.procedureTable.create({
      data: {
        ...input,
        account: {
          connect: { id: user?.accountId },
        },
      },
    });

    return procedureTable;
  } catch (e) {
    throw new UserInputError('Falha ao criar tabela de procedimento');
  }
};

export default createProcedureTable;
