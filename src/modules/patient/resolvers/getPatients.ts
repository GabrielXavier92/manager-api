import { UserInputError } from 'apollo-server';
import { Patient } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const getPatients: Resolver = async (_, { select }, { prisma, user }): Promise<Array<Patient>> => {
  try {
    const patients = await prisma.patient.findMany({
      where: {
        accountId: user?.accountId,
      },
      ...select,
    });

    return patients;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao buscar paciente');
  }
};

export default getPatients;
