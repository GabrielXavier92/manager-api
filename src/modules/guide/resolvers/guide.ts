import { UserInputError } from 'apollo-server';
import { Guide } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const getGuide: Resolver = async (_, { id }, { prisma, user }): Promise<Guide> => {
  try {
    const guide = await prisma.guide.findOne({
      where: {
        id,
      },
      include: {
        doctor: true, patient: true, procedureTable: true, proceduresGuide: { include: { procedure: true } },
      },
    });

    if (!guide || guide.accountId !== user?.accountId) throw new UserInputError('Guia não encontrada ou token invalido');

    return guide;
  } catch (e) {
    throw new UserInputError('Falha ao buscar guia');
  }
};

export default getGuide;
