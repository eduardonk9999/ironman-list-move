import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Armor {
    id: String!
    armor: String!
  }

  type Query {
    armors: [Armor!]!
  }
`;

interface Armor {
  id: string
  name: string
}

const armors: Armor[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
   Query: {
    armors: () => {
      return armors
    }
   }
  },
})

server.listen().then(({ url }) => {
  console.log(`HTTP server  ${url}`)
})