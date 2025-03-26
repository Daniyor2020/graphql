import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js';


const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game (_, args) {
            return db.games.find(game => game.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        },
        author(_, args) {
            return db.authors.find(author => author.id === args.id)
        },
        review (_, args) {
            return db.reviews.find(review => review.id === args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter(review => review.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(review => review.author_id === parent.id)
        }
    },

    Review : {
        game(parent) {
            return db.games.find(game => game.id === parent.game_id)
        },
        author(parent) {
            return db.authors.find(author => author.id === parent.author_id)
        }   
    },
    Mutation : {
    deleteGame(_, args) {
        const gameIndex = db.games.findIndex(game => game.id === args.id)
        const deletedGames = db.games.splice(gameIndex, 1)
        return deletedGames[0]
    },
    addGame(_, args) {
        const newGame = {...args.game, id: String(db.games.length + 1)}
        db.games.push(newGame)
        return newGame
    },
    updateGame(_, args) {
        const gameIndex = db.games.findIndex(game => game.id === args.id)
        const updatedGame = {...db.games[gameIndex], ...args.edits}
        db.games[gameIndex] = updatedGame
        return updatedGame
    }
}
}

// server setup

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} =await startStandaloneServer(server,{
    listen:{port:4000}})

console.log(`🚀 Server ready at: ${url}`)