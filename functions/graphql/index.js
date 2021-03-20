const { ApolloServer } = require("apollo-server-cloud-functions");

const { firestore } = require("../api");
const typeDefs = require("./schema");
const { CovidDataSource } = require("./datasources");
const resolvers = require("./resolvers");

module.exports = new ApolloServer({
  typeDefs,
  debug: true,
  playground: true,
  introspection: true,
  dataSources: () => ({
    covid: new CovidDataSource(),
  }),
  context: {
    firestore,
  },
  resolvers,
});
