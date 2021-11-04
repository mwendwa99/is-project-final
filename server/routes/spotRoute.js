const Spot = require('../model/spotModel');
const mongoose = require('mongoose');
const express = require('express');
const route = express.Router();

route.post('/user-spot', async (req, res) => {
    const { id, name, location, features, description, spaces, price } = req.body;
    Spot.create({
        name, location, features, price, spaces, description
    })
    try {
        const response = await Spot.create({
            id, name, location, price, spaces, description, features
        })
        console.log('spot saved success', response)
    } catch (error) {
        return (res.json({ status: 'error', error: error }))
    }
})

// get all spots
route.get('/spots', async (req, res) => {
    try {
        const response = await Spot.find()
        console.log('spots found', response)
        res.json(response)
    } catch (error) {
        return (res.json({ status: 'error', error: error }))
    }
})


module.exports = route