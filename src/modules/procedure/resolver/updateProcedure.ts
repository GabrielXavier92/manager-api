import { ForbiddenError } from 'apollo-server';
import { Procedure } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const updateProcedure: Resolver = async (_, { id, input, fields }, { prisma, user }): Promise<Procedure> => {
  try {
    const {
      name, code, value, specialtyId, procedureTableId,
    } = input;

    const procedure = await prisma.procedure.update({
      where: { id },
      data: {
        name,
        code,
        value,
        specialty: { connect: { id: specialtyId } },
        procedureTable: { connect: { id: procedureTableId } },
      },
      ...fields,
    });

    if (!procedure || procedure.accountId !== user?.accountId) throw new ForbiddenError('Procedimento não encontrado ou token invalido');

    return procedure;
  } catch (e) {
    throw new ForbiddenError('Falha ao editar procedimento');
  }
};

export default updateProcedure;
