import { UserInputError } from 'apollo-server';

import { Resolver } from '../../../types/graphql-utils';
import { Procedure } from '../../../types/types';

const createProcedure: Resolver = async (_, { input, fields }, { prisma, user }): Promise<Procedure> => {
  try {
    const {
      name, code, value, specialtyId, procedureTableId,
    } = input;

    const procedure = await prisma.procedure.create({
      data: {
        name,
        code,
        value,
        specialty: { connect: { id: specialtyId } },
        procedureTable: { connect: { id: procedureTableId } },
        account: { connect: { id: user!.accountId } },
      },
      ...fields,
    });

    return procedure;
  } catch (e) {
    throw new UserInputError('Falha ao criar procedimento');
  }
};

export default createProcedure;
