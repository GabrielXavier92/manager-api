import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import AccountModule from './modules/account';
import createContext from './utils/createContext';

const startServer = async () => {
  const server = new ApolloServer({
    modules: [AccountModule],
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
