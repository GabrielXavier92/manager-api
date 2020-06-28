import { GraphQLModule } from '@graphql-modules/core';
import { importSchema } from 'graphql-import';
import { join } from 'path';

import resolvers from './resolvers';
import resolversComposition from './resolversComposition';

const SpecialtyModule = new GraphQLModule({
  name: 'SpecialtyModule',
  typeDefs: importSchema(join(__dirname, 'schema.graphql')),
  resolvers,
  context: (context) => context,
  resolversComposition,
});

export default SpecialtyModule;
