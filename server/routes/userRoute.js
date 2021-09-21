const express = require('express');
const User = require('../model/userModel');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'thisisbetweenme&you'
// post new user details
router.post('/register-user', async (req, res) => {
    const { userEmail, userPassword: plainTextPassword, plate } = req.body;
    if (!userEmail || typeof userEmail !== 'string') {
        return res.json({ status: 'error', error: 'Invalid email' })
    }
    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid plainTextPassword' })
    }
    // encrypt password
    const userPassword = await bcrypt.hash(plainTextPassword, 10);

    try {
        const response = await User.create({
            userEmail,
            userPassword,
            plate
        })
        console.log('user email created successfully', response)
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key
            return (res.json({ status: 'error', error: 'email already exists!' }))
        }
        return (res.json({ status: 'error', error: error }))
    }
});

// get user login
router.post('/login-user', async (req, res) => {
    const { userEmail, userPassword } = req.body;
    const user = await User.findOne({ userEmail }).lean();
    if (!user) {
        console.log('error in get user')
        return (res.json({ status: 'error', error: 'invalid email/password' }))
    }
    if (await bcrypt.compare(userPassword, user.userPassword)) {
        // email success
        const token = jwt.sign({ id: user._id, userEmail: user.userEmail }, JWT_SECRET);
        return (res.json({ status: 'ok', email: userEmail, data: token }))
    }
    res.json({ status: 'error', error: 'invalid email/password' })
});

module.exports = router;