import { UserInputError } from 'apollo-server';
import { QueryGetPatientArgs, Patient } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const getPatient: Resolver = async (_, { id }: QueryGetPatientArgs, { prisma, user }): Promise<Patient> => {
  try {
    const patient = await prisma.patient.findOne({
      where: {
        id,
      },
    });

    if (!patient || patient.accountId !== user?.accountId) throw new UserInputError('Paciente não encontrado ou token invalido');

    return patient;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao buscar profissional');
  }
};

export default getPatient;
