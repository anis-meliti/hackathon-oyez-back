export const user = `
    me: User
`;

export const userResolvers = {
  me: (_, $, { userId, models }) => models.User.findById(userId),
};