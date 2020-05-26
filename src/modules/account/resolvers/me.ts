import { ForbiddenError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Account } from '../../../types/types';


const me: Resolver = async (_, __, { prisma, user }): Promise<Account> => {
  try {
    const account = await prisma.account.findOne({
      where: {
        id: user?.accountId,
      },
      include: {
        users: true,
      },
    });

    if (!account) throw new ForbiddenError('Failed to fetch');

    return account;
  } catch (e) {
    throw new ForbiddenError('Failed to fetch');
  }
};


export default me;
