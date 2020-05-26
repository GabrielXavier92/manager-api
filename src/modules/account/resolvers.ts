import { ResolverMap } from '../../types/graphql-utils';

import me from './resolvers/me';
import createAccount from './resolvers/createAccount';
import signIn from './resolvers/signIn';

const Resolver: ResolverMap = {
  Query: {
    me,
  },
  Mutation: {
    createAccount,
    signIn,
  },
};

export default Resolver;
