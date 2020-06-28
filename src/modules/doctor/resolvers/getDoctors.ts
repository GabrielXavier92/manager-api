import { UserInputError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Doctor } from '../../../types/types';

const getDoctors: Resolver = async (_, { fields }, { prisma, user }): Promise<Array<Doctor>> => {
  try {
    const doctors = await prisma.doctor.findMany({
      where: {
        accountId: user?.accountId,
      },
      ...fields,
    });

    return doctors;
  } catch (e) {
    throw new UserInputError('Falha ao buscar profissionais');
  }
};

export default getDoctors;
