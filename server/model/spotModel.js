var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const spotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String
    },
    location: {
        type: String
    },
    features: {
        type: String,
    },
    description: {
        type: String
    },
    spaces: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    }
});

const Spot = mongoose.model('Spot', spotSchema);
module.exports = Spot;