var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../schemas/user');

module.exports = function startupPassport(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
};
