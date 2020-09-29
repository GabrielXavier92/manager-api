import { UserInputError } from 'apollo-server';
import { MutationUpdateGuideArgs, Guide } from '../../../types/types.d';

import { Resolver } from '../../../types/graphql-utils';

const updateGuide: Resolver = async (_, { id, input }: MutationUpdateGuideArgs, { prisma, user }): Promise<Guide> => {
  try {
    const guide = await prisma.guide.findOne({
      where: {
        id,
      },
      include: { proceduresGuide: true },
    });

    if (!guide || guide.accountId !== user?.accountId) throw new UserInputError('Guia não encontrado ou token invalido');
    if (guide.isClosed) throw new UserInputError('Guia não pode ser editada pois ja foi fechada');

    if (guide.proceduresGuide) {
      await prisma.procedureGuide.deleteMany({
        where: { guideId: guide.id },
      });
    }

    const {
      start,
      comments,
      proceduresGuide,
      doctor,
      patient,
      procedureTable,
      isClosed,
    } = input;

    const procedures = proceduresGuide.map((proc) => ({
      name: proc?.procedure.name,
      value: proc?.value,
      quantity: proc?.quantity,
      procedure: { connect: { id: proc?.procedure.id } },
      account: { connect: { id: user?.accountId } },
    }));

    const updatedGuide = await prisma.guide.update({
      where: { id },
      data: {
        start,
        comments,
        isClosed: isClosed ? isClosed! : false,
        procedureTable: { connect: { id: procedureTable.id } },
        proceduresGuide: {
          create: procedures,
        },
        doctor: { connect: { id: doctor.id } },
        patient: { connect: { id: patient.id } },
        account: { connect: { id: user?.accountId } },
      },
      include: { doctor: true, patient: true, proceduresGuide: { include: { procedure: true } } },
    });

    return updatedGuide;
  } catch (e) {
    throw new UserInputError('Falha ao editar guia');
  }
};

export default updateGuide;
