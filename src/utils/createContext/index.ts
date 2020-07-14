import { Request } from 'express';
import { PrismaClient } from '@prisma/client';
import { Context } from '../../types/graphql-utils.d';
import decodeJWT from '../decodeJWT';

const prisma = new PrismaClient({
  log: ['info', 'warn', 'error'],
});

export interface ISession {
  req: Request;
}

async function createContext(session: ISession): Promise<Context> {
  const authToken = session.req.headers.authorization;
  let user;
  if (authToken) {
    user = await decodeJWT(authToken!);
  }
  return {
    user,
    prisma,
  };
}

export default createContext;
