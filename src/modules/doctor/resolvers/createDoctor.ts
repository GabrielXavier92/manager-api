import { UserInputError } from 'apollo-server';

import { Resolver } from '../../../types/graphql-utils';
import { Doctor } from '../../../types/types';

const createDoctor: Resolver = async (_, { input, select }, { prisma, user }): Promise<Doctor> => {
  try {
    const doctor = await prisma.doctor.create({
      data: {
        ...input,
        account: {
          connect: { id: user?.accountId },
        },
      },
      ...select,
    });
    return doctor;
  } catch (e) {
    throw new UserInputError('Falha ao criar profissional');
  }
};

export default createDoctor;
