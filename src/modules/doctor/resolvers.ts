import { ResolverMap } from '../../types/graphql-utils';
import createDoctor from './resolvers/createDoctor'

const Resolver: ResolverMap = {
  Query: {},
  Mutation: {
    createDoctor
  },
};

export default Resolver;
