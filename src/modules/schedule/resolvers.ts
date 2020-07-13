import { ResolverMap } from '../../types/graphql-utils';

import createSchedule from './resolvers/createSchedule';
import updateSchedule from './resolvers/updateSchedule';
import schedules from './resolvers/schedules';

const Resolver: ResolverMap = {
  Query: {
    schedules,
  },
  Mutation: {
    createSchedule,
    updateSchedule,
  },
};

export default Resolver;
