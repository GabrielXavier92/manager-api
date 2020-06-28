import { UserInputError } from 'apollo-server';

import { Resolver } from '../../../types/graphql-utils';
import { Specialty, ProcedureInput, Procedure } from '../../../types/types';

const updateSpecialty: Resolver = async (_, { id, input }, { prisma, user }): Promise<Specialty> => {
  try {
    const specialty = await prisma.specialty.findOne({
      where: {
        id,
      },
      include: { procedures: true },
    });

    if (!specialty || specialty.accountId !== user?.accountId) throw new UserInputError('Especialidade não encontrada ou token invalido');

    const { name, procedures } = input;

    const updatedSpecialty = await prisma.specialty.update({
      where: { id },
      data: { name },
    });

    let proceduresPromise: Procedure[] = [];
    if (procedures.length > 0) {
      proceduresPromise = procedures.map((procedure: ProcedureInput) => {
        if (procedure.id) {
          return prisma.procedure.update({
            where: { id: procedure.id },
            data: { ...procedure, id: undefined },
          });
        }
        return prisma.procedure.create({
          data: {
            ...procedure,
            id: undefined,
            account: { connect: { id: user?.accountId } },
            specialty: { connect: { id: specialty.id } },
          },
        });
      });
    } else {
      await prisma.procedure.deleteMany({
        where: { specialtyId: specialty.id },
      });
    }

    const newProcedures = await Promise.all(proceduresPromise);

    return { ...updatedSpecialty, procedures: newProcedures };
  } catch (e) {
    console.log(e);
    throw new UserInputError('Falha ao editar especialidade');
  }
};

export default updateSpecialty;
