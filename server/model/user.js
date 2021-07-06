var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema for our database
const userSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
});

// 'users' collection to be stored in compass
const usermodel = mongoose.model('users', userSchema);
module.exports = usermodel;