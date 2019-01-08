const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    getNameById(id: Int!): String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getNameById: (root, args, context) => "Name: Flora; Id is " + args["id"]
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
