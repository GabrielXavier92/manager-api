import { ResolverMap } from '../../types/graphql-utils';

import createDoctor from './resolvers/createDoctor';
import getDoctors from './resolvers/getDoctors';
import getDoctor from './resolvers/getDoctor';
import updateDoctor from './resolvers/updateDoctor';

const Resolver: ResolverMap = {
  Query: {
    getDoctor,
    getDoctors,
  },
  Mutation: {
    createDoctor,
    updateDoctor,
  },
};

export default Resolver;
