import { UserInputError } from 'apollo-server';
import { Specialty } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const createSpecialty: Resolver = async (_, { input, fields }, { prisma, user }): Promise<Specialty> => {
  try {
    const {
      name,
    } = input;

    const specialty = await prisma.specialty.create({
      data: {
        name,
        account: { connect: { id: user!.accountId } },
      },
      ...fields,
    });

    return specialty;
  } catch (e) {
    throw new UserInputError('Falha ao criar especialidade');
  }
};

export default createSpecialty;
