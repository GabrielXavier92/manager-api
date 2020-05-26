import { UserInputError } from 'apollo-server';

import { Resolver } from '../../../types/graphql-utils';
import { MutationUpdateDoctorArgs, Doctor } from '../../../types/types';

const updateDoctor: Resolver = async (_, { id, input }: MutationUpdateDoctorArgs, { prisma, user }): Promise<Doctor> => {
  const {
    name, birth, gender, register,
  } = input;
  try {
    const doctor = await prisma.doctor.findOne({
      where: {
        id,
      },
    });

    if (!doctor || doctor.accountId !== user?.accountId) throw new UserInputError('Usuario não encontrado ou token invalido');

    const updatedDoctor = await prisma.doctor.update({
      where: {
        id,
      },
      data: {
        name,
        birth,
        gender,
        register,
      },
    });

    return updatedDoctor;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao editar profissional');
  }
};

export default updateDoctor;
