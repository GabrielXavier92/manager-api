import { UserInputError } from 'apollo-server';
import { MutationCreateGuideArgs, Guide } from '../../../types/types.d';

import { Resolver } from '../../../types/graphql-utils';

const createGuide: Resolver = async (_, { input }: MutationCreateGuideArgs, { prisma, user }): Promise<Guide> => {
  const {
    description, doctorId, patientId,
  } = input;
  try {
    const guide = await prisma.guide.create({
      data: {
        description,
        account: { connect: { id: user?.accountId } },
        doctor: { connect: { id: doctorId } },
        patient: { connect: { id: patientId } },
      },
    });
    return guide;
  } catch (e) {
    console.error(e);
    throw new UserInputError('Falha ao criar guia');
  }
};

export default createGuide;
