import { UserInputError } from 'apollo-server';
import { Guide } from '../../../types/types.d';

import { Resolver } from '../../../types/graphql-utils';

const updateGuide: Resolver = async (_, { id, input, select }, { prisma, user }): Promise<Guide> => {
  try {
    const guide = await prisma.guide.findOne({
      where: {
        id,
      },
    });

    if (!guide || guide.accountId !== user?.accountId) throw new UserInputError('Guia não encontrado ou token invalido');

    const updatedGuide = await prisma.guide.update({
      where: {
        id,
      },
      data: {
        ...input,
      },
      ...select,
    });

    return updatedGuide;
  } catch (e) {
    throw new UserInputError('Falha ao editar paciente');
  }
};

export default updateGuide;
