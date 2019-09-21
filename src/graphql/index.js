import { ApolloServer, gql } from 'apollo-server';
import Type from './types';
import { verifyToken } from '../utils/jwt.utils.js';
import { queriesType, queries } from './queries';
import { mutationsType, mutations } from './mutation';

import User from '../db/models/user';
import Institution from '../db/models/institution';
import Event from '../db/models/event';

const typeDefs = gql`
    ${Type}
    ${queriesType}
    ${mutationsType}
`;

const relations = {
  Institution: {
    user: (parent, $, { models }) => models.User.findById(parent.user),
  },
  Event: {
    user: (parent, $, { models }) => models.User.findById(parent.user),
  },
};

export default new ApolloServer({
  typeDefs,
  resolvers: { Query: queries, Mutation: mutations, ...relations },
  context: ({ req }) => {
    const userId = verifyToken(req.headers.authorization);
    return {
      userId,
      models: {
        User,
        Institution,
        Event,
      },
    };
  },
});
