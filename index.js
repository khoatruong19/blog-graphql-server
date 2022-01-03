const express = require("express")
const {ApolloServer} = require("apollo-server-express")
const typeDefs = require("./schema/typeDefs")
const resolvers = require("./schema/resolvers")
const mongoose = require("mongoose")
const mongoDataMethods = require("./data/db")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

const connectDB = async () => {
    try {
        await mongoose.connect( process.env.MONGO_SEC, {
            useNewUrlParser: true,
        })
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

let server = null
const serverStart = async () => {
    server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({mongoDataMethods})
    })

    await server.start()
    server.applyMiddleware({app})
}

serverStart()

app.listen({port:5000}, () => console.log("SERVER IS RUNNING ON http://localhost:5000/graphql"))
