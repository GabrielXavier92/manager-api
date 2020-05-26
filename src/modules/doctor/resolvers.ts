import { ResolverMap } from '../../types/graphql-utils';

import createDoctor from './resolvers/createDoctor';
import getDoctors from './resolvers/getDoctors';

const Resolver: ResolverMap = {
  Query: {
    getDoctors,
  },
  Mutation: {
    createDoctor,
  },
};

export default Resolver;
