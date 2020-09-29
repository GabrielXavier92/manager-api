import { ForbiddenError } from 'apollo-server';
import { GetGuide } from '../../../types/types';
import { Resolver } from '../../../types/graphql-utils';

const getGuides: Resolver = async (_, {
  take = 10,
  cursor,
  filter,
  fields,
}, { prisma, user }): Promise<GetGuide> => {
  try {
    let guides;
    if (fields.select.guides) {
      guides = await prisma.guide.findMany({
        take,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        where: {
          accountId: user?.accountId,
          doctor: { name: { contains: filter } },
          patient: { name: { contains: filter } },
        },
        orderBy: { createdAt: 'asc' },
        include: {
          doctor: true, patient: true, procedureTable: true, proceduresGuide: { include: { procedure: true } },
        },
      });
    }

    let ammount = 0;

    if (fields.select.queryInfo) {
      ammount = await prisma.guide.count({
        where: {
          accountId: user?.accountId,
        },
      });
    }

    return { guides, queryInfo: { ammount } };
  } catch (e) {
    throw new ForbiddenError('Falha ao buscar guia');
  }
};

export default getGuides;
