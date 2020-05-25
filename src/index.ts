import { ApolloServer } from 'apollo-server';
import { GraphQLModule } from '@graphql-modules/core';
import { AccountModule } from './modules';
import createContext from './utils/createContext';

const startServer = async () => {
  const app = new GraphQLModule({
    imports: [AccountModule],
    context: createContext,
  });

  const { schema, context } = app;

  const server = new ApolloServer({
    schema,
    context,
    introspection: true,
    playground: true,
  });

  const port = process.env.PORT || 4000;

  server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer().catch((e) => console.log(e));
