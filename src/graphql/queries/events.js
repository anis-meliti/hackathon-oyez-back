export const eventsQueries = `
  events: [eventt]
  event(id: ID!): Event

`;

export const eventtResolvers = {
  event: (_, $, { models }) => models.Event.find({}, {}, { sort: { createdAt: -1 } }),
  event: (_, { id }, { models }) => models.event.findById(id),

 };