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
  "https://blogger.googleusercontent.com/img/a/AVvXsEgR5Pslwa5XPlYYCwagpOQObpWgtz-OLYuj1NNSPy3ioQ8gI2gg1vYedWwCz7ofr1Y6FSIb6imWjDd0Ho3win7qT9Mj-lbuqRMgnPssGGTdqTyu1988ePg3vX1kBzib12XhdsHuX1UjFeK9ieDI7dYxQgfV7Ww_79rWasii34bTReEE_bQl8SehHJpJ=w329-h228",
  img: '',
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