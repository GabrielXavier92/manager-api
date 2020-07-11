import { GraphQLModule } from '@graphql-modules/core';
import { importSchema } from 'graphql-import';
import { join } from 'path';

import resolvers from './resolvers';
import resolversComposition from './resolversComposition';

const ScheduleModule = new GraphQLModule({
  name: 'ScheduleModule',
  typeDefs: importSchema(join(__dirname, 'schema.graphql')),
  resolvers,
  context: (context) => context,
  resolversComposition,
});

export default ScheduleModule;
