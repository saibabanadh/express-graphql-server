const express = require("express");
const { graphqlHTTP } = require('express-graphql');

const config = require('./config/config');
const mongodbConfigHelper = require(`./config/mongo.config`);
const appMiddleware = require(`./config/app.middleware`);
const schema = require("./src/graphql/schema");

const app = express();
const onAppStart = () => {
    appMiddleware.appMiddleware(app);
    mongodbConfigHelper.connectMongoDB(config);
    app.listen(config.PORT, () => {
        console.log(`App is running on port ${config.PORT}`);
    });
}

onAppStart(app);

// GraphQL Queries
app.use(`${config.API_BASE}/graphql`, graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

// Express Routes
app.get('/', (req, res) => res.status(200).json({"message":"Welcome to Express GraphQL Server API.."}));

process.on('uncaughtException', function (error) {
    console.error((new Date).toUTCString() + ' uncaughtException Message :: ', error.message);
});

exports.app = app;
