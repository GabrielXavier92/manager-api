import { UserInputError } from 'apollo-server';

import { Resolver } from '../../../types/graphql-utils';
import { Doctor } from '../../../types/types';

const updateDoctor: Resolver = async (_, { id, input, fields }, { prisma, user }): Promise<Doctor> => {
  try {
    const doctor = await prisma.doctor.findOne({
      where: {
        id,
      },
      include: { specialties: true },
    });

    if (!doctor || doctor.accountId !== user?.accountId) throw new UserInputError('Usuario não encontrado ou token invalido');

    const disconnectSpecialties = doctor.specialties.filter((spec) => !input.specialties?.some((newSpec: any) => spec.id === newSpec.id)).map((spec) => ({ id: spec.id }));
    const specialties = input?.specialties?.map((spec: any) => ({ id: spec.id }));

    const updatedDoctor = await prisma.doctor.update({
      where: {
        id,
      },
      data: {
        ...input,
        specialties: {
          disconnect: disconnectSpecialties?.length > 0 ? disconnectSpecialties : undefined,
          connect: specialties?.length! > 0 ? specialties : undefined,
        },
      },
      ...fields,
    });

    return updatedDoctor;
  } catch (e) {
    throw new UserInputError('Falha ao editar profissional');
  }
};

export default updateDoctor;
