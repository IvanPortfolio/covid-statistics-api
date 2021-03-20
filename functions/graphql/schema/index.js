const { gql } = require("apollo-server-cloud-functions");

const typeDefs = gql`
  type Country {
    activeCases: Int
    country: String!
    critical: Int
    deathsPerMillion: Int
    newCases: Int
    newDeath: Int
    newRecovered: Int
    population: Int
    region: String!
    testsPerMillion: Int
    totalCases: Int
    totalCasesPerMillion: Int
    totalDeaths: Int
    totalRecovered: Int
    totalTests: Int
  }

  type Query {
    countries: [Country]
    country(id: String!): Country
  }
`;

module.exports = typeDefs;
