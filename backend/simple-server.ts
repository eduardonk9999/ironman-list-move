import { ApolloServer, gql } from "apollo-server";
import armors from "./irons";



const typeDefs = gql`
  type Armor {
    img: String
    armor: String
  }

  type Query {
    armors: [Armor]
  }
`;

interface Armor {
  img: string
  armor: string
}




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