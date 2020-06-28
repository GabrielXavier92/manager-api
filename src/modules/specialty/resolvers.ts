import { ResolverMap } from '../../types/graphql-utils';

import createSpecialty from './resolvers/createSpecialty';

const Resolver: ResolverMap = {
  Query: {
    getSpecialty: () => {},
    getSpecialties: () => {},
  },
  Mutation: {
    createSpecialty,
    updateSpecialty: () => {},
  },
};

export default Resolver;
