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

module.exports = route;