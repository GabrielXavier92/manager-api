import { ForbiddenError } from 'apollo-server';
import { Specialty } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const getSpecialty: Resolver = async (_, { id, fields }, { prisma, user }): Promise<Specialty> => {
  try {
    const specialty = await prisma.specialty.findOne({
      where: {
        id,
      },
      ...fields,
    });

    if (!specialty || specialty.accountId !== user?.accountId) throw new ForbiddenError('Especialidade não encontrada ou token invalido');

    return specialty;
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar especialidade');
  }
};

export default getSpecialty;
