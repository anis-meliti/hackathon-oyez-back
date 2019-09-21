export const InstitutionsMutations = `
  addInstitution (input: InstitutionInput): Institution
  editInstitution (id: ID!, input: InstitutionInput): Institution
  deleteInstitution (id: ID!): Institution
`;

export const InstitutionsResolvers = {
  addInstitution: (_, { input }, { models }) => {
    const institution = new models.Institution({
      ...input,
    });
    return institution.save();
  },
  editInstitution: async (_, { id, input }, { models }) => {
    const institution = await models.Institution.findById(id);
    if (!institution) {
      throw new Error(`Impossible de trouver l'évenement avec l'identifiant ${institution}`);
    }
    return models.Institution.findOneAndUpdate({ _id: id }, { ...input }, { new: true });
  },
  deleteInstitution:
    async (_, { id }, { models }) => models.Institution.findOneAndDelete({ _id: id }),
};
