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

  type Profile {
    _id: ID
    name: String
    email: String
    # field to store the user's password
    password: String
    location: String
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
