import { ForbiddenError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { User } from '../../../types/types';


const getUser: Resolver = async (_, { fields }, { prisma, user }): Promise<User> => {
  try {
    const fetchUser = await prisma.user.findOne({
      where: {
        id: user?.id,
      },
      ...fields,
    });

    if (!fetchUser) throw new ForbiddenError('Failed to fetch user');

    return fetchUser;
  } catch (e) {
    throw new ForbiddenError('Failed to fetch');
  }
};


export default getUser;
