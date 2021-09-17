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
        type: Number
    },
    features: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
}, { timpestamps: true })

const Org = mongoose.model('Organization', orgSchema);

module.exports = Org;