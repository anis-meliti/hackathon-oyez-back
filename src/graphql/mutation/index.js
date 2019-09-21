import { eventsMutations, eventsResolvers } from './events';
import { userMutations, userResolvers } from './user';
import { InstitutionsMutations, InstitutionsResolvers } from './institution';

export const mutationsType = `
  type Mutation {
    ${eventsMutations}
    ${userMutations}
    ${InstitutionsMutations}
  }
`;

export const mutations = Object.assign(
  eventsResolvers,
  userResolvers,
  InstitutionsResolvers,
);
