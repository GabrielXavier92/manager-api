import { ForbiddenError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Account } from '../../../types/types';


const me: Resolver = async (_, { fields }, { prisma, user }): Promise<Account> => {
  try {
    // Apenas nesse caso, nao faz sentido adicionar o account id
    const filterSelect = fields;
    delete filterSelect.select.accountId;

    const account = await prisma.account.findOne({
      where: {
        id: user?.accountId,
      },
      ...filterSelect,
    });

    if (!account) throw new ForbiddenError('Failed to fetch account');

    return account;
  } catch (e) {
    throw new ForbiddenError('Failed to fetch');
  }
};


export default me;
