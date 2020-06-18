import { UserInputError } from 'apollo-server';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { Resolver } from '../../../types/graphql-utils';
import { LoginUser, Role } from '../../../types/types';

const signIn: Resolver = async (_, { input, fields }, { prisma }): Promise<LoginUser> => {
  const { email, password } = input;
  try {
    const filterUser = {
      ...fields.select.user,
    };
    filterUser.select.password = true;

    const user = await prisma.user.findOne({
      where: {
        email,
      },
      ...filterUser,
    });


    if (!user) throw new UserInputError('Falha ao realizar login, usuario nao encontrado.');

    if (!await bcrypt.compare(password, user.password)) throw new UserInputError('Falha ao realizar login, senha incorreta.');

    const roles = (await prisma.user.findOne({ where: { email } }).roles()).map((role: Role) => role.role);

    const token = jwt.sign({ id: user.id, roles, accountId: user.accountId }, process.env.JWT_SECRET as string, {
      expiresIn: '7days',
    });

    return {
      token,
      user,
    };
  } catch (e) {
    throw new UserInputError('Falha ao realizar login, verifique email/senha.');
  }
};

export default signIn;
