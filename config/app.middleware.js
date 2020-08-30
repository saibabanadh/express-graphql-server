const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

exports.appMiddleware = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use((req, res, next) => {
        req.setTimeout(100000); //10 secs
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type, Authorization');
        res.setTimeout(300000, function () {
            res.status(408).json({ success: false, message: "Request has timed out." })
        });
        next();
    });
    app.use(cors());
    app.use(helmet.xssFilter());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());

    return app;
}