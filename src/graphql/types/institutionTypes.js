const institution = `
type Institution {
    id: ID!
    name: String
    login: String
    location: String
    rating: String
    review: String
    tags: String
    description: String
    link: String    
}

input InstitutionInput {
    login: String
    name: String
    location: String
    rating: String
    review: String
    tags: String
    description: String
    link: String
}
`;

export default institution;
