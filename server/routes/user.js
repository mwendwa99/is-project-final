const express = require('express');
var user = require('../model/user');
const router = express();

router.post('/createuser', (req, res) => {
    let users = {
        name: "bro",
        age: 21,
        gender: "male"
    }
    user.create(users).then(function (userdata) {
        res.send(userdata);
    });
});
router.get('/bro', (req, res) => {
    res.send('bro');
});

module.exports = router;