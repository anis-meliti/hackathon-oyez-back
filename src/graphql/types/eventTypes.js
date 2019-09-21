const event = `
type Event {
    id: ID!
    title: String
    date: String
    description: String
}
input EventInput {
    title: String
    date: String
    description: String
}
`;

export default event;
