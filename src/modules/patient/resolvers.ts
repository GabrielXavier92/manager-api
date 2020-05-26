import { ResolverMap } from '../../types/graphql-utils';

import createPatient from './resolvers/createPatient';
import getPatients from './resolvers/getPatients';
import getPatient from './resolvers/getPatient';
import updatePatient from './resolvers/updatePatient';

const Resolver: ResolverMap = {
  Query: {
    getPatient,
    getPatients,
  },
  Mutation: {
    createPatient,
    updatePatient,
  },
};

export default Resolver;
