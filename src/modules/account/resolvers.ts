import { ResolverMap } from '../../types/graphql-utils';

import me from './resolvers/me';
import getUser from './resolvers/getUser';
import createAccount from './resolvers/createAccount';
import signIn from './resolvers/signIn';

const Resolver: ResolverMap = {
  Query: {
    me,
    getUser,
  },
  Mutation: {
    createAccount,
    signIn,
  },
};

export default Resolver;
