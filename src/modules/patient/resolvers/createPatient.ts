import { UserInputError } from 'apollo-server';
import { MutationCreatePatientArgs, Patient } from '../../../types/types.d';

import { Resolver } from '../../../types/graphql-utils';

const createPatient: Resolver = async (_, { input }: MutationCreatePatientArgs, { prisma, user }): Promise<Patient> => {
  const {
    name, birth, gender,
  } = input;
  try {
    const patient = await prisma.patient.create({
      data: {
        name,
        birth,
        gender,
        account: {
          connect: { id: user?.accountId },
        },
      },
    });
    return patient;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao criar paciente');
  }
};

export default createPatient;
