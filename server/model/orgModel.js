var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const orgSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    location: {
        type: String
    },
    spaces: {
        type: Number,
        min: 0,
    },
    features: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        min: 0,
    }
}, { timpestamps: true })

const Org = mongoose.model('Organization', orgSchema);

module.exports = Org;