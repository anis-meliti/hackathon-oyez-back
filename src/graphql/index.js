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

export default new ApolloServer({
  typeDefs,
  resolvers: { Query: queries, Mutation: mutations },
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
