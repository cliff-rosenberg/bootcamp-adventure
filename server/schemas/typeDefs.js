const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Choices {
    text: String
    location: Int
  }

  type Game {
    _id: ID
    mapLocation: Int
    paragraph: String
    choices: [Choices]!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  # Set up an Auth type to handle returning data from user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
