import { ResolverMap } from '../../types/graphql-utils';

import getSpecialty from './resolvers/getSpecialty';
import getSpecialties from './resolvers/getSpecialties';
import createSpecialty from './resolvers/createSpecialty';
import updateSpecialty from './resolvers/updateSpecialty';

const Resolver: ResolverMap = {
  Query: {
    getSpecialty,
    getSpecialties,
  },
  Mutation: {
    createSpecialty,
    updateSpecialty,
  },
};

export default Resolver;
