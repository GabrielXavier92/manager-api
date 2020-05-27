import { UserInputError } from 'apollo-server';
import { Guide } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const getGuide: Resolver = async (_, { id, select }, { prisma, user }): Promise<Guide> => {
  try {
    const guide = await prisma.guide.findOne({
      where: {
        id,
      },
      ...select,
    });

    if (!guide || guide.accountId !== user?.accountId) throw new UserInputError('Guia não encontrada ou token invalido');

    return guide;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao buscar guia');
  }
};

export default getGuide;
