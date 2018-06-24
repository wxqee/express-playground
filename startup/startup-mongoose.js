var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = function startupMongoose() {
    mongoose.connect('mongodb://localhost/server')
        .then(() =>  console.log('connection successful'))
        .catch((err) => console.error(err));
};
