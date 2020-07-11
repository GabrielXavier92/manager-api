import { ResolverMap } from '../../types/graphql-utils';

import createDoctor from './resolvers/createDoctor';
import doctors from './resolvers/doctors';
import doctor from './resolvers/doctor';
import updateDoctor from './resolvers/updateDoctor';

const Resolver: ResolverMap = {
  Query: {
    doctor,
    doctors,
  },
  Mutation: {
    createDoctor,
    updateDoctor,
  },
};

export default Resolver;
