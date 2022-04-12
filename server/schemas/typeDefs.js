const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Buisness{
    _id:ID
    buisnessName:[String]
    buisnessOwner:[String]
    email: String
    cost:Int
    description:String
 }
  type User {
    _id: ID
    username: String!
    email: String!
    buisnessName: String!
    savedBuisness: Buisness
  }
  type Auth {
    token: ID!
    user: User
  }
  input buisnessInput{
    id:ID!
    buisnessName:[String]
    buisnessOwner:[String]
    email: String
    cost:Int!
    description:String
 }
 type Query{
    buisness: [Buisness]
    me: User
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addBuisness(buisnessName: String!, buisnessOwner: String!, email: String!, Cost: Int, description: String!) :Buisness
  saveBuisness(input: buisnessInput): User
  removeBuisness(buisnessId: ID!): Buisness
}
`;
module.exports = typeDefs;