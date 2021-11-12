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
        min: 0,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

const Spot = mongoose.model('Spot', spotSchema);
module.exports = Spot;