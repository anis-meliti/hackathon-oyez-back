export const eventsMutations = `
  addEvent (input: EventInput): Event
  editEvent (id: ID!, input: EventInput): Event
  deleteEvent (id: ID!): Event
`;

export const eventsResolvers = {
  addEvent: (_, { input }, { models }) => {
    const event = new models.Event({
      ...input,
    });
    return event.save();
  },
  editEvent: async (_, { id, input }, { models }) => {
    const event = await models.Event.findById(id);
    if (!event) {
      throw new Error(`Impossible de trouver l'évenement avec l'identifiant ${event}`);
    }
    return models.Event.findOneAndUpdate({ _id: id }, { ...input }, { new: true });
  },
  deleteEvent: async (_, { id }, { models }) => models.Event.findOneAndDelete({ _id: id }),
};
