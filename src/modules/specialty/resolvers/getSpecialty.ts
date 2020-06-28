import { UserInputError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Specialty } from '../../../types/types';

const getSpecialty: Resolver = async (_, { id, fields }, { prisma, user }): Promise<Specialty> => {
  try {
    const specialty = await prisma.specialty.findOne({
      where: {
        id,
      },
      ...fields,
    });

    if (!specialty || specialty.accountId !== user?.accountId) throw new UserInputError('Especialidade não encontrada ou token invalido');

    return specialty;
  } catch (e) {
    throw new UserInputError('Falha ao buscar especialidade');
  }
};

export default getSpecialty;
