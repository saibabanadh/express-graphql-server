
let dummyDB = {};

exports.resolvers = {
    appname: () => {
        return "This is GraphQL Express App"
    },
    random: () => {
        return Math.random();
    },
    rollDice: () => {
        return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    },
    setMessage: ({message}) => {
        dummyDB["message"] = message;
        return message;
    },
    getMessage: () => {
        return dummyDB.message
    }
}
