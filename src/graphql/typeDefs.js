const { buildSchema } = require('graphql');

exports.typeDefs = buildSchema(`
    type Query {
        appname: String!
        random: Float!
        rollDice: [Int]
        getMessage: String!
    }
    type Mutation{
        setMessage(message: String!) : String!
    }
`);
