import { ResolverMap } from '../../types/graphql-utils';

const Resolver: ResolverMap = {
  Query: {
    teste: () => 'teste',
  },
  Mutation: {},
};

export default Resolver;
