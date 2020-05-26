import { AuthenticationError, UserInputError, ForbiddenError } from 'apollo-server';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { MutationSignInArgs, LoginUser } from '../../types/types.d';

import { ResolverMap } from '../../types/graphql-utils';
import { Account, MutationCreateAccountArgs } from '../../types/types';

const Resolver: ResolverMap = {
  Query: {
    me: async (_, __, { prisma, user }): Promise<Account> => {
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
    },
  },
  Mutation: {
    createAccount: async (_, { input }: MutationCreateAccountArgs, { prisma }): Promise<Account> => {
      const {
        email, password, name, plan,
      } = input;

      try {
        const hashPassword = await bcrypt.hash(password, 10);

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
        });
        return account;
      } catch (e) {
        console.error(e);
        throw new UserInputError('Falha ao criar conta, verifique o email informado ou tente novamente mais tarde');
      }
    },
    signIn: async (_, { input }: MutationSignInArgs, { prisma }): Promise<LoginUser> => {
      const { email, password } = input;
      try {
        const user = await prisma.user.findOne({
          where: {
            email,
          },
          include: {
            roles: true,
          },
        });

        if (!user) throw new AuthenticationError('Falha ao realizar login, verifique email/senha.');

        if (!await bcrypt.compare(password, user.password)) throw new AuthenticationError('Falha ao realizar login, verifique email/senha.');

        const roles = user.roles.map((role) => role.role);

        const token = jwt.sign({ id: user.id, roles, accountId: user.accountId }, process.env.JWT_SECRET as string, {
          expiresIn: '7days',
        });

        return {
          token,
          user: {
            ...user,
            roles,
          },
        };
      } catch (e) {
        console.error(e);
        throw new AuthenticationError('Falha ao realizar login, verifique email/senha.');
      }
    },
  },
};

export default Resolver;
