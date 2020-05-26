import { GraphQLModule } from '@graphql-modules/core';
import { importSchema } from 'graphql-import';
import { join } from 'path';
import resolvers from './resolvers';

const AccountModule = new GraphQLModule({
  name: 'AccountModule',
  typeDefs: importSchema(join(__dirname, 'schema.graphql')),
  resolvers,
  context: (context) => context,
});

export default AccountModule;
