const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const { loadFiles } = require('@graphql-tools/load-files')


const resolvers = {
  Query: {
    hello: () => 'Hello World',
    hello2: () => 2,
    person: (_, args) => `Hola ${args.name} tienes ${args.age} años`,
    getBoolean: () => true,
    getId: () => '123456789',
    getFloat: () => 3.1416,
    getNumbers: (_, args) => args.numbers.map((number) => number * 2),
    products: ()=>{
      return {
        id:'123',
        name:"Cafe",
        price:2000,
        description:'bla bla blu',
        image:'https://image.png',
        createdAt: new Date().toISOString()
      }
    }
  },
};

const useGraphQl = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();
  server.applyMiddleware({ app });
};

module.exports = useGraphQl;
