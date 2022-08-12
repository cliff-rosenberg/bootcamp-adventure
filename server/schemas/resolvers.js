// set up for authentication
// see https://www.apollographql.com/docs/apollo-server/security/authentication/
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return User.find();
    },

    profile: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, profile: user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, profile: user };
    },

    addLocation: async (parent, { userId, location }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { location: location },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    removeLocation: async (parent, { userId, location }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { location: location } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
