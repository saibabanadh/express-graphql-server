const mongoose = require('mongoose');

exports.connectMongoDB = (config) => {
    let dbUrl;
    let dbConf = {
        "hostname": config.MONGO.hostname,
        "port": config.MONGO.port,
        "username": config.MONGO.username,
        "password": config.MONGO.password,
        "replicaSet": config.MONGO.replicaSet,
        "dbName": config.MONGO.dbName
    };
    if ((dbConf.username != undefined || dbConf.password != undefined) && (dbConf.username != '' || dbConf.password != '')) {
        dbUrl = `mongodb://${dbConf.username}:${dbConf.password}@${dbConf.hostname}:${dbConf.port}/${dbConf.dbName}`;
        if (dbConf.replicaSet && dbConf.replicaSet != '') {
            dbUrl += `?replicaSet=${dbConf.replicaSet}`;
        }
        mongoose.connect(dbUrl, {
            "auth": { "authSource": "admin" },
            "useNewUrlParser": true,
            "useUnifiedTopology": true,
            'useCreateIndex': true,
            'useFindAndModify': false
        });

    } else {
        dbUrl = `mongodb://${dbConf.hostname}:${dbConf.port}/${dbConf.dbName}`;
        mongoose.connect(dbUrl, {
            "useNewUrlParser": true,
            "useUnifiedTopology": true,
            'useCreateIndex': true,
        });
    }
    console.log("DB URL::", dbUrl);
    mongoose.connection.once('open', () => {
        console.log("Connected to MongoDB Successfully.");
    });
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected');
    });
    mongoose.connection.on('disconnected', () => {
        console.error("Mongodb is disconnected");
    });
    mongoose.connection.on('reconnected', () => {
        console.log('MongoDB reconnected');
    });
    mongoose.connection.on('error', (error) => {
        console.log('MongoDB error :: ' + error);
    });
};