import { ForbiddenError } from 'apollo-server';
import { Procedure } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const getProcedure: Resolver = async (_, { id, fields }, { prisma, user }): Promise<Procedure> => {
  try {
    const procedure = await prisma.procedure.findOne({
      where: {
        id,
      },
      ...fields,
    });

    if (!procedure || procedure.accountId !== user?.accountId) throw new ForbiddenError('Procedimento não encontrado ou token invalido');

    return procedure;
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar procedimento');
  }
};

export default getProcedure;
