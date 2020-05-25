import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';

const AccountModule = new GraphQLModule({
  name: 'AccountModule',
  typeDefs: gql`
    type Query {
      myData: Data
    }

    type Data {
      field: String
    }
  `,
});

export default AccountModule;
