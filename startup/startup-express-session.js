var session = require('express-session');

module.exports = function startupExpressSession(app) {
    var sessionOptions = {
        secret : 'w3y1c3',
        name : 'sessionId',
        cookie: {},
        resave: false,
        saveUninitialized: true,
    };

    if (app.get('env') === 'production') {
        app.set('trust proxy', 1); // trust first proxy
        sessionOptions.cookie.secure = true; // serve secure cookies
    }
    app.use(session(sessionOptions));
};
