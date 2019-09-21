import { eventsQueries, eventtResolvers } from './events';

export const queriesType = `
type Query {
  ${eventsQueries}
}`;

export const queries = Object.assign(
  eventtResolvers,
);
