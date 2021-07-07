const express = require('express');
const User = require('../model/user');
const router = express();

// router.post('/createuser', (req, res) => {
//     let users = {
//         name: "bro",
//         age: 21,
//         gender: "male"
//     }
//     User.create(users).then(function (userdata) {
//         res.send(userdata);
//     });
// });
router.get('/user-data', (req, res) => {
    const user = new User({
        name: "bozz",
        age: 25,
        gender: "male"
    });
    user.save()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(`error in saving to mongo: ${err}`)
        })
});

router.get('/all-users', (req, res) => {
    User.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(`error in getting user data: ${err}`)
        })
});
// single user
router.get('/single-user', (req, res) => {
    User.findById('60e54b5cfbd9880ca0c0146e')
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(`error in getting single user: ${err}`)
        });
})

module.exports = router;