import { GraphQLModule } from '@graphql-modules/core';
import { importSchema } from 'graphql-import';
import { join } from 'path';

const AccountModule = new GraphQLModule({
  name: 'AccountModule',
  typeDefs: importSchema(join(__dirname, 'schema.graphql')),
});

export default AccountModule;
