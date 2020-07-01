import { UserInputError } from 'apollo-server';

import * as bcrypt from 'bcryptjs';
import { Account } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

import roles from '../../../constants/roles';
import defaultSpecialties from '../../../constants/defaultSpecialties';

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
              connect: roles,
            },
          },
        },
      },
      ...filterSelect,
    });

    const createDefaultTableProcedure = await prisma.procedureTable.create({
      data: {
        name: 'Tabela Padrão',
        isDefault: true,
        account: { connect: { id: account.id } },
      },
    });

    // Durante a criacao de conta, é criado uma tabela de procedimentos padrao com alguns procedimentos e especialidades pre cadastrados
    const createdDefaultSpecialtiesAndProcedures = defaultSpecialties.map((specialty: any) => {
      const procedures = specialty.procedures.map((procedure: any) => ({
        ...procedure,
        account: { connect: { id: account.id } },
        procedureTable: { connect: { id: createDefaultTableProcedure.id } },
      }));
      const defaultSepecialties = prisma.specialty.create({
        data: {
          name: specialty.specialty.name,
          account: { connect: { id: account.id } },
          procedures: { create: procedures },
        },
      });
      return defaultSepecialties;
    });

    await Promise.all(createdDefaultSpecialtiesAndProcedures);

    return account;
  } catch (e) {
    throw new UserInputError('Falha ao criar conta, verifique o email informado ou tente novamente mais tarde');
  }
};

export default createAccount;
