const Admin = require('../model/adminModel');
const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'thisisbetweenadmins'

// register new admin
route.post('/register-admin', async (req, res) => {
    const { organization, adminEmail, adminPassword: plainTextPassword } = req.body;

    // organization validation
    if (!organization || typeof organization !== 'string') {
        return (res.json({ status: 'error', error: 'invalid organization' }))
    }
    // email validation
    if (!adminEmail || typeof adminEmail !== 'string') {
        return (res.json({ status: 'error', error: 'invalid email' }))
    }
    // password encryption
    const adminPassword = await bcrypt.hash(plainTextPassword, 10);

    try {
        const response = await Admin.create({
            organization, adminEmail, adminPassword
        })
        // console.log(`new admin created: ${response}`)
    } catch (error) {
        if (error.code === 11000) {
            return (res.json({ status: 'error', error: 'organization already exists!' }))
        } throw error
    }
})
// admin login
route.post('/login-admin', async (req, res) => {
    const { adminEmail, adminPassword } = req.body;
    const admin = await Admin.findOne({ adminEmail }).lean();
    if (!admin) {
        console.log('error in get admin')
        return (res.json({ status: 'error', error: 'invalid email/password' }))
    }
    if (await bcrypt.compare(adminPassword, admin.adminPassword)) {
        // email success
        const token = jwt.sign({ id: admin._id, adminEmail: admin.adminEmail }, JWT_SECRET);
        return (res.json({ status: 'ok', admin: adminEmail, data: token }))
    }
    res.json({ status: 'error', error: 'invalid email/password' })
});

module.exports = route;