import { UserInputError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Doctor } from '../../../types/types';

const getDoctors: Resolver = async (_, __, { prisma, user }): Promise<Array<Doctor>> => {
  try {
    const doctors = await prisma.doctor.findMany({
      where: {
        accountId: user?.accountId,
      },
    });

    return doctors;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao buscar profissionais');
  }
};

export default getDoctors;
