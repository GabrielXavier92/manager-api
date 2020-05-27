import { UserInputError } from 'apollo-server';
import { Patient } from '../../../types/types.d';

import { Resolver } from '../../../types/graphql-utils';

const updatePatient: Resolver = async (_, { id, input, select }, { prisma, user }): Promise<Patient> => {
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
        ...input,
      },
      ...select,
    });

    return updatedPatient;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao editar paciente');
  }
};

export default updatePatient;
