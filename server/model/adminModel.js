const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    organization: {
        type: String,
        required: true,
        unique: true
    },
    adminEmail: {
        type: String,
        required: true
    },
    adminPassword: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
