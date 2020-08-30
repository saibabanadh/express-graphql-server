const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const GeneralGraphQL = require('./general.graphql');
const UserGraphQL = require('./user.graphql');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        appname: GeneralGraphQL.appname,
        addition: GeneralGraphQL.addition,
        user: UserGraphQL.user,
        users: UserGraphQL.users
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: UserGraphQL.createUser
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
