import { ForbiddenError } from 'apollo-server';
import { Specialty } from "../../../types/types.d";
import { Resolver } from '../../../types/graphql-utils';

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
    throw new ForbiddenError('Falha ao buscar especialidades');
  }
};

export default getSpecialties;
