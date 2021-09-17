const Org = require('../model/orgModel');
const express = require('express');
const route = express.Router();

route.post('/register-org', async (req, res) => {
    const { name, features, description, location, price, spaces } = req.body;
    if (!name || typeof name !== 'string') {
        return res.json({ status: 'error', error: 'Invalid organization' })
    }
    try {
        const response = await Org.create({
            name, features, description, location, price, spaces
        })
        // console.log('organization details created successfully', response)
    } catch (error) {
        if (error.code === 11000) {
            return (res.json({ status: 'error', error: 'organization already exist!' }))
        } throw error
    }
});

// get org details
route.get('/get-org', async (req, res) => {
    let details = Org.find({}, function (err, details) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(details);
        }
    });
})

module.exports = route;