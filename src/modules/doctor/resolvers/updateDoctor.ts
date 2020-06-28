import { UserInputError } from 'apollo-server';

import { Resolver } from '../../../types/graphql-utils';
import { Doctor } from '../../../types/types';

const updateDoctor: Resolver = async (_, { id, input, fields }, { prisma, user }): Promise<Doctor> => {
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
        ...input,
      },
      ...fields,
    });

    return updatedDoctor;
  } catch (e) {
    throw new UserInputError('Falha ao editar profissional');
  }
};

export default updateDoctor;
