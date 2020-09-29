import { UserInputError } from 'apollo-server';
import { GuideInput } from '../../../types/types.d';


import { Resolver } from '../../../types/graphql-utils';

const createGuide: Resolver = async (_, { input }: { input: GuideInput }, { prisma, user }): Promise<any> => {
  const {
    start,
    comments,
    procedureTable,
    proceduresGuide,
    doctor, patient,
    isClosed,
  } = input;
  try {
    const procedures = proceduresGuide.map((proc) => ({
      name: proc?.procedure.name,
      value: proc?.value,
      quantity: proc?.quantity,
      procedure: { connect: { id: proc?.procedure.id } },
      account: { connect: { id: user?.accountId } },
    }));

    const guide = await prisma.guide.create({
      data: {
        start,
        comments,
        isClosed: isClosed ? isClosed! : false,
        procedureTable: { connect: { id: procedureTable.id } },
        proceduresGuide: { create: procedures },
        doctor: { connect: { id: doctor.id } },
        patient: { connect: { id: patient.id } },
        account: { connect: { id: user?.accountId } },
      },
      include: { doctor: true, patient: true, proceduresGuide: { include: { procedure: true } } },
    });


    return guide;
  } catch (e) {
    console.log(e);
    throw new UserInputError('Falha ao criar guia');
  }
};

export default createGuide;
