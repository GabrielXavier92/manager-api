import { ForbiddenError } from 'apollo-server';
import { Patient } from '../../../types/types.d';
import { Resolver } from '../../../types/graphql-utils';

const getPatient: Resolver = async (_, { id, fields }, { prisma, user }): Promise<Patient> => {
  try {
    const patient = await prisma.patient.findOne({
      where: {
        id,
      },
      ...fields,
    });

    if (!patient || patient.accountId !== user?.accountId) throw new ForbiddenError('Paciente não encontrado ou token invalido');

    return patient;
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar profissional');
  }
};

export default getPatient;
