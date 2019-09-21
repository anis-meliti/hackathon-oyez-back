export const eventsQueries = `
  events: [Event]
  event(id: ID!): Event

`;

export const eventtResolvers = {
  events: (_, $, { models }) => models.Event.find({}, {}, { sort: { createdAt: -1 } }),
  event: (_, { id }, { models }) => models.event.findById(id),
};
