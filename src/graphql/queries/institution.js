export const institutionQueries = `
  institutions: [Institution]
  institution(id: ID!): Institution
  FindInstitution(input: String): [Institution]
`;
export const institutionResolvers = {
  institutions: (_, $, { models }) => models.Institution.find({}, {}, { sort: { createdAt: -1 } }),
  institution: (_, { id }, { models }) => models.Institution.findById(id),
  FindInstitution:
    async (_, { input }, { models }) => models.Institution.find({
      $or: [{ name: { $regex: `.*${input}.*` } }, { tags: input }],
    }),
};
