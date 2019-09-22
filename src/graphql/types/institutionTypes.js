const institution = `
type Institution {
    id: ID!
    name: String
    location: String
    rating: String
    review: String
    tags: [String]
    description: String
    url: String
    logo: String,
    phone: String,
    user: User    
}

input InstitutionInput {
    name: String
    location: String
    rating: String
    review: String
    tags: [String]
    description: String
    url: String
    logo: String,
    phone: String,
    user: String
}
`;

export default institution;
