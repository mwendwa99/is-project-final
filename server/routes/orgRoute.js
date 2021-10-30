const Org = require('../model/orgModel');
const express = require('express');
const route = express.Router();

// add new user post requests
// add ++ or -- logic on client side then send update request to org db

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
// find by id
route.get('/get-org/:id', (req, res) => {
    const id = req.params.id;
    Org.findById(id).lean()
        .exec((err, result) => {
            if (err) return console.error(err)
            try {
                res.json(result)
            } catch (error) {
                if (error) {
                    return (res.json({ status: 'error', error: error }))
                } throw error
            }
        })
})

// delete org details
route.delete('/delete-org/:id', (req, res) => {
    Org.findOneAndDelete(req.params.id)
        .exec()
        .then(doc => {
            if (!doc) {
                return (res.json({ status: 'error', error: 'item does not exist!' }))
            } else {
                return res.status(204).end();
            }
        }).catch((error) => console.log(error))
})

module.exports = route;