const express = require('express');
const User = require('../model/userModel');
const router = express.Router();
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// post new user details
router.route('/register-user').post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
    console.log(req.body);
});

// get user login
// router.get('user-login', (req, res)=>{

// })

router.get('/all-users', (req, res) => {
    User.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(`error in getting user data: ${err}`)
        })
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