var mongoose = require('mongoose');
var Schema = mongoose.Schema();

const spotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'], //location type
            required: true
        },
        coordintates: {
            type: [Number],
            required: true
        }
    },
    features: {
        type: Array,
        required: true
    },
    spaces: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Spot = mongoose.model('Spot', spotSchema);
module.exports = User;