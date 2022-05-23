const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

async function a() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    await server.start()
    const app = express()
    server.applyMiddleware({ app })
    app.listen({ port:5000 }, () => {
        console.log('READY localhost:5000');
    })
}
 a()
