import 'dotenv/config';
import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server';
import Logger from '@est-normalis/simple-apollo-logger';

import {
  AccountModule, DoctorModule, GuideModule, PatientModule,
} from './modules';

import createContext from './utils/createContext';
import addSelect from './utils/addSelect';

const startServer = async () => {
  const AppModule = new GraphQLModule({
    name: 'AppModule',
    imports: [AccountModule, DoctorModule, GuideModule, PatientModule],
    resolversComposition: {
      Query: [addSelect],
      Mutation: [addSelect],
    },
  });


  const server = new ApolloServer({
    modules: [AppModule],
    context: createContext,
    introspection: true,
    playground: true,
    extensions: [() => new Logger({
      ignoreSchemaRequest: true,
    })],
  });

  const port = process.env.PORT || 4000;

  server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer().catch((e) => console.log(e));
