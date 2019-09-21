import { ApolloServer, gql } from 'apollo-server';
import Type from './types';
import { verifyToken } from '../utils/jwt.utils.js';
import { queriesType, queries } from './queries';

import User from '../db/models/user';
import institutions from '../db/models/institution';
import event from '../db/models/event';

const typeDefs = gql`
    ${Type}
    ${queriesType}
`;

export default new ApolloServer({
  typeDefs,
  resolvers: { Query: queries },
  context: ({ req }) => {
    const userId = verifyToken(req.headers.authorization);
    return {
      userId,
      models: {
        User,
        institutions,
        event,
      },
    };
  },
});
