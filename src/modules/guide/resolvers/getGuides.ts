import { ForbiddenError } from 'apollo-server';
import { Guide } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const getGuides: Resolver = async (_, __, { prisma, user }): Promise<Array<Guide>> => {
  try {
    const guides = await prisma.guide.findMany({
      where: {
        accountId: user?.accountId,
      },
    });

    return guides;
  } catch (e) {
    console.error(e);
    throw new ForbiddenError('Falha ao buscar guia');
  }
};

export default getGuides;
