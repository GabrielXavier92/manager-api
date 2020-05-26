import { ResolverMap } from '../../types/graphql-utils';

import createDoctor from './resolvers/createDoctor';
import getDoctors from './resolvers/getDoctors';
import getDoctor from './resolvers/getDoctor';

const Resolver: ResolverMap = {
  Query: {
    getDoctor,
    getDoctors,
  },
  Mutation: {
    createDoctor,
  },
};

export default Resolver;
