import { ResolverMap } from '../../types/graphql-utils';

import createPatient from './resolvers/createPatient';
import patients from './resolvers/patients';
import patient from './resolvers/patient';
import updatePatient from './resolvers/updatePatient';

const Resolver: ResolverMap = {
  Query: {
    patient,
    patients,
  },
  Mutation: {
    createPatient,
    updatePatient,
  },
};

export default Resolver;
