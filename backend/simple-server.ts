import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Armor {
    img: String!
    armor: String!
  }

  type Query {
    armors: [Armor!]!
  }
`;

interface Armor {
  img: string
  armor: string
}

const armors: Armor[] = [
  {
    img: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fb/Iron_Man_Armor_-_Mark_I.png/revision/latest?cb=20181116150929',
    armor: 'markOne'
  }
];

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