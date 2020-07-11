import { ForbiddenError } from 'apollo-server';
import { Guide } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const getGuides: Resolver = async (_, { select }, { prisma, user }): Promise<Array<Guide>> => {
  try {
    const guides = await prisma.guide.findMany({
      where: {
        accountId: user?.accountId,
      },
      ...select,
    });

    return guides;
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar guia');
  }
};

export default getGuides;
