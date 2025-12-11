// src/index.ts (ou onde estiver o seu server)
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import express from 'express';
import cors from 'cors';
import type { CorsRequest } from 'cors'; // importante pro TypeScript

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // Configura CORS no Express
  app.use(
    '/graphql',
    cors({
      origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Vite dev server
      credentials: true, // permite cookies, Authorization header, etc
    }),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        // contexto opcional (pra você usar token depois se quiser)
        return { req };
      },
    })
  );

  const { server: httpServer } = await new Promise<any>((resolve) => {
    const httpServer = app.listen({ port: 4000 }, () => {
      console.log(`Server ready at http://localhost:4000/graphql`);
    });
    resolve({ server: httpServer });
  });
}

startServer().catch((err) => {
  console.error('Erro ao iniciar o servidor:', err);
});