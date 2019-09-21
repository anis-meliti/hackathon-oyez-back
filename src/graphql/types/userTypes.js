const user = `
type User {
    id: ID!
    login: String
    mail: String
    password: String
    studyField: String   
    role: String 
}

type UserLogged {
    token: String!
    user: User
}

input loginInput {
    email: String
    password: String
}

input UserInput {
    login: String
    mail: String
    password: String
    studyField: String   
    role: String
}

input PasswordInput{
    oldPassword: String
    newPassword: String
}
`;

export default user;
