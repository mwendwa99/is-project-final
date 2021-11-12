const mongoose = require('mongoose');
const Schema = mongoose.Schema

const controllerSchema = new Schema({
    spotId: Schema.Types.ObjectId,
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    spaces: {
        type: Number,
        min: 0,
    },
    price: {
        type: Number,
        min: 0,
    },
    description: {
        type: String,
    },
    features: {
        type: String,
    },
    day: {
        type: String,
    },
    approved: {
        type: Boolean,
    }
}, { timestamps: true });

const Controller = mongoose.model('Controller', controllerSchema);
module.exports = Controller