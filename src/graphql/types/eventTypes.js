const event = `
type Event {
    id: ID!
    title: String
    date: String
    description: String
    user: User    
}
input EventInput {
    title: String
    date: String
    description: String
    user: String
}
`;

export default event;
