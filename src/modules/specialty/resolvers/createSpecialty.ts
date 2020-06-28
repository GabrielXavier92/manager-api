import { UserInputError } from 'apollo-server';
import { Resolver } from '../../../types/graphql-utils';
import { Specialty, ProcedureInput } from '../../../types/types';

const createSpecialty: Resolver = async (_, { input, select }, { prisma, user }): Promise<Specialty> => {
  try {
    const { name, procedures } = input;
    let newProcedures = [];

    // Adiciona relacionamento aos procedimentos
    if (procedures) {
      newProcedures = procedures.map((procedure: ProcedureInput) => {
        const newProcedure = {
          ...procedure,
          account: {
            connect: { id: user?.accountId },
          },
        };
        return newProcedure;
      });
    }

    const specialty = await prisma.specialty.create({
      data: {
        name,
        account: {
          connect: { id: user?.accountId },
        },
        procedures: {
          create: newProcedures,
        },
      },
      ...select,
    });

    return specialty;
  } catch (e) {
    console.log(e);
    throw new UserInputError('Falha ao criar especialidade');
  }
};

export default createSpecialty;
