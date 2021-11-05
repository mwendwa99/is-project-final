const express = require('express');
const Controller = require('./controllerModel');
const route = express.Router();

// post controller
route.post('/post-controller', async (req, res) => {
    const { spotId, email, name, location, spaces, price, description, features, day } = req.body;

    try {
        const response = await Controller.create({
            spotId, email, name, location, spaces, price, description, features, day
        })
        return res.status(200).json({
            message: 'user spot added successfully',
            response
        })
    } catch (error) {
        if (error.code === 11000) {
            return (res.json({
                message: 'user spot already exists',
                error
            }))
        } throw error
    }
});
// get all controller
route.get('/get-controller', (req, res) => {
    Controller.find().lean()
        .then(doc => res.json(doc))
        .catch(err => console.log(err))
})

// get all controllers for specific user
route.get('/get-controller/:email', (req, res) => {
    const email = req.params.email;
    Controller.find({ email: email }, (error, response) => {
        if (error) {
            return res.json({ status: 'error', error: error })
        } else {
            res.json(response)
        }
    })
});
// delete controller
route.delete('/delete-controller/:id', (req, res) => {
    const id = req.params.id;
    Controller.findOneAndDelete(id)
        .exec()
        .then((doc) => {
            if (!doc) {
                return res.json({ status: 'item does not exist!' })
            } else {
                return res.json({ status: 'item successfully removed!' })
            }
        }).catch((error) => console.log(error))
});

// approve controller
route.put('/approve-controller/:id', (req, res) => {
    const id = req.params.id;
    Controller.findOneAndUpdate(id, { $set: { approved: true } }, { new: true })
        .exec()
        .then((doc) => {
            if (!doc) {
                return res.json({ status: 'item does not exist!' })
            } else {
                return res.json(doc)
            }
        }).catch((error) => console.log(error))
});


module.exports = route;