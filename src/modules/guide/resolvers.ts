import { ResolverMap } from '../../types/graphql-utils';

import createGuide from './resolvers/createGuide';
import guide from './resolvers/guide';
import guides from './resolvers/guides';
import updateGuide from './resolvers/updateGuide';

const Resolver: ResolverMap = {
  Query: {
    guide,
    guides,
  },
  Mutation: {
    createGuide,
    updateGuide,
  },
};

export default Resolver;
