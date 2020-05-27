import { ResolverMap } from '../../types/graphql-utils';

import createGuide from './resolvers/createGuide';
import getGuides from './resolvers/getGuides';
import getGuide from './resolvers/getGuide';
import updateGuide from './resolvers/updateGuide';

const Resolver: ResolverMap = {
  Query: {
    getGuide,
    getGuides,
  },
  Mutation: {
    createGuide,
    updateGuide,
  },
};

export default Resolver;
