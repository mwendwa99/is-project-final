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
    // location: {
    //     type: {
    //         type: String,
    //         enum: ['Point'], //location type
    //         required: true
    //     },
    //     coordintates: {
    //         type: [Number],
    //         required: true
    //     }
    // },
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