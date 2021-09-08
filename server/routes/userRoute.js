const express = require('express');
const User = require('../model/userModel');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'thisisbetweenme&you'
// post new user details
router.post('/register-user', async (req, res, next) => {

    const { email, password: plainTextPassword } = req.body;
    if (!email || typeof email !== 'string') {
        return res.json({ status: 'error', error: 'Invalid email' })
    }
    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid plainTextPassword' })
    }

    // encrypt password
    const password = await bcrypt.hash(plainTextPassword, 10);

    try {
        const response = await User.create({
            email,
            password
        })
        // console.log('user email created successfully', response)
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key
            return (res.json({ status: 'error', error: 'email already exists!' }))
        } throw error
    }
});

// get user login
router.post('/login-user', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean()
    if (!user) {
        return res.json({ status: 'error', error: 'invalid email/password' })
    }
    if (await bcrypt.compare(password, user.password)) {
        // email & password combination is successful
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET)
        return res.json({ status: 'ok', data: token })
    }
    res.json({ status: 'error', error: 'invalid email/password' })

})

router.get('/user', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean()
    if (!user) {
        return res.json({ status: 'error', error: 'invalid email/password' })
    }
    // if (await bcrypt.compare(password, user.password)) {
    //     // email & password combination is successful
    //     const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET)
    //     return res.json({ status: 'ok', data: token })
    // }
    // res.json({ status: 'error', error: 'invalid email/password' })

});
// single user
router.get('/user-login', (req, res) => {
    User.findById(req.body._id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(`error in getting single user: ${err}`)
        });
})

module.exports = router;