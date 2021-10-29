const express = require('express');
const Controller = require('./controllerModel');
const route = express.Router();

route.post('/post-controller', async (req, res) => {
    const { spotId, email, name, location, spaces, price, description, features, day } = req.body;

    try {
        const response = await Controller.create({
            spotId, email, name, location, spaces, price, description, features, day
        })
        console.log('controller document added successfully', response)
    } catch (error) {
        if (error.code === 11000) {
            return (res.json({ status: 'error', error: 'organization already exist!' }))
        } throw error
    }
});

route.get('/get-controller/:email', (req, res) => {
    const email = req.params.email;
    Controller.find({ email: email }, (error, response) => {
        if (error) {
            return res.json({ status: 'error', error: error })
        } else {
            res.json(response)
        }
    })
})

module.exports = route;