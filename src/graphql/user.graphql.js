const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const UserModel = require('../models/user.model');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        userName: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: GraphQLString},
        lastLogin: {type: GraphQLString}
    })
});

exports.user = {
    type: UserType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args){
        return UserModel.findById(args.id);
    }
}
exports.users = {
    type: new GraphQLList(UserType),
    resolve(parent, args){
        return UserModel.find({});
    }
}

exports.createUser = {
    type: UserType,
    args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        userName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLString},
    },
    resolve(parent, args){
        let user = new UserModel({
            firstName: args.firstName,
            lastName: args.lastName,
            userName: args.userName,
            email: args.email,
            phone: args.phone,
            address: args.address
        });
        return user.save();
    }
};