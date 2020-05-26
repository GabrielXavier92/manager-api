import { PrismaClient } from '@prisma/client';

export type Resolver = (parent: any, args: any, context: Context, info: any) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}

export interface Context {
  prisma: PrismaClient;
}

export interface User {
  id: string;
  accountId: string;
  roles: [String];
}
