const { gql } = require("apollo-server-express");

const typeDefs = gql`
type buisness{
    id:ID
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
    savedBuisness: [buisness]
  }
  type Auth {
    token: ID!
    user: User
  }
  input buisnessInput{
    id:ID
    buisnessName:[String]
    buisnessOwner:[String]
    email: String
    cost:Int
    description:String
 }
 type Query{
    getAllbuisness:[buisness]
    me: User
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBuisness(input: buisnessInput): User
  removeBuisness(BuisnessId: String!): User
}
`;
module.exports = typeDefs;