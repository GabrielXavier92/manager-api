import { UserInputError } from 'apollo-server';

import * as bcrypt from 'bcryptjs';
import { Account } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const createAccount: Resolver = async (_, { input, fields }, { prisma }): Promise<Account> => {
  const {
    email, password, name, plan,
  } = input;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    // Apenas nesse caso, nao faz sentido adicionar o account id
    const filterSelect = fields;
    delete filterSelect.select.accountId;

    const account = await prisma.account.create({
      data: {
        name,
        plan,
        users: {
          create: {
            email,
            password: hashPassword,
            name,
            roles: {
              connect: [{ role: 'ADMIN' }],
            },
          },
        },
      },
      ...filterSelect,
    });
    return account;
  } catch (e) {
    throw new UserInputError('Falha ao criar conta, verifique o email informado ou tente novamente mais tarde');
  }
};

export default createAccount;
