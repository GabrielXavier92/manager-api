import { ResolverMap } from '../../types/graphql-utils';

import me from './resolvers/me';
import user from './resolvers/user';
import createAccount from './resolvers/createAccount';
import signIn from './resolvers/signIn';

const Resolver: ResolverMap = {
  Query: {
    me,
    user,
  },
  Mutation: {
    createAccount,
    signIn,
  },
};

export default Resolver;
