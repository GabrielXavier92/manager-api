import { ForbiddenError } from 'apollo-server';
import { Specialty } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const updateSpecialty: Resolver = async (_, { id, input, fields }, { prisma, user }): Promise<Specialty> => {
  try {
    const {
      name,
    } = input;

    const specialty = await prisma.specialty.update({
      where: { id },
      data: {
        name,
      },
      ...fields,
    });

    if (!specialty || specialty.accountId !== user?.accountId) throw new ForbiddenError('Especialidade não encontrada ou token invalido');

    return specialty;
  } catch (e) {
    throw new ForbiddenError('Falha ao editar especialidade');
  }
};

export default updateSpecialty;
