import { GraphQLModule } from '@graphql-modules/core';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import {
  AccountModule, DoctorModule, GuideModule, PatientModule,
} from './modules';
import createContext from './utils/createContext';

const startServer = async () => {
  const AppModule = new GraphQLModule({
    name: 'AppModule',
    imports: [AccountModule, DoctorModule, GuideModule, PatientModule],
  });


  const server = new ApolloServer({
    modules: [AppModule],
    context: createContext,
    introspection: true,
    playground: true,
  });

  const port = process.env.PORT || 4000;

  server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer().catch((e) => console.log(e));
