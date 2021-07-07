var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define user schema for our database
const userSchema = new Schema({
    name: {
        type: String
        // required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
}, { timestamps: true });

// pluralize the User and find 'users' collection in the database
// user model
const User = mongoose.model('User', userSchema);
module.exports = User;