const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLScalarType
} = require('graphql');

exports.appname = {
    type: GraphQLString,
    resolve(parent, args){
        return "Express App";
    }
}

exports.addition = {
    type: GraphQLInt,
    args: {x: {type: GraphQLInt}, y: {type: GraphQLInt}},
    resolve(parent, args){
        return args.x + args.y;
    }
}
