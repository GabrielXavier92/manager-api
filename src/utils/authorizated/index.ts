import { ForbiddenError } from 'apollo-server';

export const authorizated = (role: string) => (next: any) => (
  root: any,
  args: any,
  context: any,
  info: any,
) => {
  if (!context.user.roles.includes(role)) {
    throw new ForbiddenError('Unauthorized!');
  }

  return next(root, args, context, info);
};

export default authorizated;
