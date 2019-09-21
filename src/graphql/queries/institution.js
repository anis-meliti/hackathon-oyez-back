export const institutionQueries = `
institutions: [Institution]
institution(id: ID!): Institution
 
`;
export const institutionResolvers = {
    institutions: (_, $, { models }) => models.Institution.find({}, {}, { sort: { createdAt: -1 } }),
    institution: (_, { id }, { models }) => models.Institution.findById(id),
},