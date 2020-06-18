import { UserInputError } from 'apollo-server';
import { Patient } from '../../../types/types.d';

import { Resolver } from '../../../types/graphql-utils';

const createPatient: Resolver = async (_, { input, select }, { prisma, user }): Promise<Patient> => {
  try {
    const patient = await prisma.patient.create({
      data: {
        ...input,
        account: {
          connect: { id: user?.accountId },
        },
      },
      ...select,
    });
    return patient;
  } catch (e) {
    throw new UserInputError('Falha ao criar paciente');
  }
};

export default createPatient;
