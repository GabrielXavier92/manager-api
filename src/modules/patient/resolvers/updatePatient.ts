import { UserInputError } from 'apollo-server';
import { MutationUpdatePatientArgs, Patient } from '../../../types/types.d';

import { Resolver } from '../../../types/graphql-utils';

const updatePatient: Resolver = async (_, { id, input }: MutationUpdatePatientArgs, { prisma, user }): Promise<Patient> => {
  const {
    name, birth, gender,
  } = input;
  try {
    const patient = await prisma.patient.findOne({
      where: {
        id,
      },
    });

    if (!patient || patient.accountId !== user?.accountId) throw new UserInputError('Paciente não encontrado ou token invalido');

    const updatedPatient = await prisma.patient.update({
      where: {
        id,
      },
      data: {
        name,
        birth,
        gender,
      },
    });

    return updatedPatient;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao editar paciente');
  }
};

export default updatePatient;
