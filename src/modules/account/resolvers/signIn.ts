import { AuthenticationError } from 'apollo-server';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { Resolver } from '../../../types/graphql-utils';
import { LoginUser } from '../../../types/types';

const signIn: Resolver = async (_, { input, select }, { prisma }): Promise<LoginUser> => {
  const { email, password } = input;
  try {
    const user = await prisma.user.findOne({
      where: {
        email,
      },
      ...select,
    });

    if (!user) throw new AuthenticationError('Falha ao realizar login, verifique email/senha.');

    if (!await bcrypt.compare(password, user.password)) throw new AuthenticationError('Falha ao realizar login, verifique email/senha.');

    const roles = await (await prisma.user.findOne({ where: { email } }).roles()).map((role) => role.role);

    const token = jwt.sign({ id: user.id, roles, accountId: user.accountId }, process.env.JWT_SECRET as string, {
      expiresIn: '7days',
    });

    return {
      token,
      user,
    };
  } catch (e) {
    console.error(e);
    throw new AuthenticationError('Falha ao realizar login, verifique email/senha.');
  }
};

export default signIn;
