import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js'

import { typeDefs } from './schema.js'

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((r) => r.game_id === parent.id)
        }
    }
    , Author: {
        reviews(parent) {
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    Reviews: {
        author(parent) {
            return db.authors.find((a) => a.id === parent.author_id)
        },
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id)
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('port ready at', 4000)
console.log('hi lee')