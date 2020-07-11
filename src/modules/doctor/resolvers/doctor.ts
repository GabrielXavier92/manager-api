import { UserInputError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Doctor } from '../../../types/types';

const getDoctor: Resolver = async (_, { id, fields }, { prisma, user }): Promise<Doctor> => {
  try {
    const doctor = await prisma.doctor.findOne({
      where: {
        id,
      },
      ...fields,
    });

    if (!doctor || doctor.accountId !== user?.accountId) throw new UserInputError('Usuario não encontrado ou token invalido');

    return doctor;
  } catch (e) {
    throw new UserInputError('Falha ao buscar profissional');
  }
};

export default getDoctor;
