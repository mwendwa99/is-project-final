const Spot = require('../model/spotModel');
const express = require('express');
const route = express.Router();

route.post('/spot', async (req, res) => {
    let data = new Spot({
        const: { name, location, features, spaces, price } = req.body
    })
})