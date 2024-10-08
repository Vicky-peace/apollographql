import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';
import { ApolloServerOptionsWithTypeDefs } from "@apollo/server";


const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
    {
        title: "The Awekening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster"
    },
];

// Resolvers define how to fetch the types defined in your schema.
//This resolver retrieves books from the "books" array above.

const resolvers = {
    Query:{
        books: () => books,
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server,{
listen: {port: 4000},
});

console.log(`🚀 Server ready at: ${url}`)