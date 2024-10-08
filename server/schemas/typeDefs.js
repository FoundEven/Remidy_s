const typeDefs = `

  type User {
    _id: ID
    firstName: String
    email: String
    shoppingCart: [ID]
  }

  type Item { 
    _id: ID
    itemName: String
    itemDescription: String
    itemRegion: String
    category: [String]
    price: Float
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id:ID!): User
    items: [Item]
    item(itemId: ID!): Item
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, email: String!, password: String!): Auth
    addCart(_id: ID): User
    removeFromCart(_id: ID, itemID: ID): User
  }
`;

module.exports = typeDefs;
