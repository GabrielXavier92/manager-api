import { UserInputError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Specialty } from '../../../types/types';

const getSpecialties: Resolver = async (_, { fields }, { prisma, user }): Promise<Array<Specialty>> => {
  try {
    const specialties = await prisma.specialty.findMany({
      where: {
        accountId: user?.accountId,
      },
      ...fields,
    });

    return specialties;
  } catch (e) {
    throw new UserInputError('Falha ao buscar especialidades');
  }
};

export default getSpecialties;
