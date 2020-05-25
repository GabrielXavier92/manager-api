import { PrismaClient } from '@prisma/client';
import { Context } from '../../types/graphql-utils.d';

const prisma = new PrismaClient();

function createContext(): Context {
  return {
    prisma,
  };
}

export default createContext;
