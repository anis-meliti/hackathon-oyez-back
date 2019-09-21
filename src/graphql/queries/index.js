import { eventsQueries, eventtResolvers } from './events';
import { institutionQueries, institutionResolvers } from './institution';
import { userQueries, userResolvers } from './user';

export const queriesType = `
type Query {
  ${eventsQueries}
  ${institutionQueries}
  ${userQueries}
}`;

export const queries = Object.assign(
  eventtResolvers,
  institutionResolvers,
  userResolvers,
);
