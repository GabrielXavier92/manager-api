import { UserInputError } from 'apollo-server';

import { Resolver } from '../../../types/graphql-utils';
import { MutationCreateDoctorArgs, Doctor } from '../../../types/types';

const createDoctor: Resolver = async (_, { input }: MutationCreateDoctorArgs, { prisma, user }): Promise<Doctor> => {
  const {
    name, birth, gender, register,
  } = input;
  try {
    const doctor = await prisma.doctor.create({
      data: {
        name,
        birth,
        gender,
        register,
        account: {
          connect: { id: user?.accountId },
        },
      },
    });
    return doctor;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao criar profissional');
  }
};

export default createDoctor;
