export const typeDefs = `#graphql
type Game{
    id: ID!
    title: String!
    platform: [String!]!
    reviews:[Reviews!]
}
type Reviews{
    id:ID!
    rating:Int!
    content:String!
    game:Game!
    author:Author!

}
type Author{
    id:ID!,
    name:String!
    verified:Boolean!
    reviews:[Reviews!]
}

type Query{
     reviews:[Reviews]
     review(id:ID!) : Reviews
     games:[Game]
     game(id:ID!):Game
     authors:[Author]
     author(id:ID!):Author
}
`