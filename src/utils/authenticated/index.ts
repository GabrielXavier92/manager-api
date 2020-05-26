import { AuthenticationError } from 'apollo-server';
import { Context } from '../../types/graphql-utils.d';

const authenticated = (next: any) => (root: any, args: any, context: Context, info: any) => {
  if (!context.user) {
    throw new AuthenticationError('Token Invalido ou nao fornecido');
  }

  return next(root, args, context, info);
};

export default authenticated;
