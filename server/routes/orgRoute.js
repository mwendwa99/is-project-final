const Org = require('../model/orgModel');
const express = require('express');
const route = express.Router();
const Controller = require('../controller/controllerModel');

// add new user post requests
route.post('/register-org', async (req, res) => {
    const { name, features, description, location, price, spaces } = req.body;
    if (!name || typeof name !== 'string') {
        return res.json({ status: 'error', error: 'Invalid organization' })
    }
    try {
        const response = await Org.create({
            name, features, description, location, price, spaces
        })
        return res.status(200).json({
            message: 'user spot added successfully',
            response
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
    try {
        await Org.aggregate([
            {
                '$lookup': {
                    'from': 'controllers',
                    'localField': '_id',
                    'foreignField': 'spotId',
                    'as': 'controllers'
                }
            }, {
                '$addFields': {
                    'spaces': {
                        '$let': {
                            'vars': {
                                'ctrl': '$controllers.spaces'
                            },
                            'in': {
                                '$subtract': [
                                    '$spaces', {
                                        '$sum': '$$ctrl'
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {
                '$project': {
                    '_id': 1,
                    'name': 1,
                    'features': 1,
                    'description': 1,
                    'location': 1,
                    'price': 1,
                    'spaces': 1
                }
            }
        ],
            function (err, results) {
                if (err) {
                    return res.json({ status: 'error', error: err })
                } else {
                    return res.json({ status: 'success', data: results })
                }
            }
        );
    } catch (error) {
        console.log(error)
    }

})
// find by id
route.get('/get-org/:id', (req, res) => {
    const id = req.params.id;
    console.log('id', id)
    Org.findById(id, (err, org) => {
        if (err) {
            return res.json({ status: 'error', error: err })
        } else {
            return res.json(org)
        }
    })
})
// update org details
// route.put('/update-org/:id', (req, res) => {
//     const id = req.params.id;

//     // Org.findById(id).lean()
//     //     .exec((err, result) => {
//     //         if (err) return console.error(err)
//     //         try {
//     //             res.json(result)
//     //             console.log('RESULT', result)
//     //         } catch (error) {
//     //             if (error) {
//     //                 return (res.json({ status: 'error', error: error }))
//     //             } throw error
//     //         }
//     //     })
// })
// find by location
route.get('/find-org/:location', (req, res) => {
    const location = req.params.location;
    Org.find({ 'location': new RegExp(location, 'i') })
        .exec()
        .then(doc => {
            if (!doc) {
                return res.json({ status: 'location not listed!' })
            } else {
                return res.json(doc)
            }
        }).catch((error) => console.log(error))
});

// delete org details
route.delete('/delete-org/:id', (req, res) => {
    Org.findByIdAndDelete(req.params.id)
        .exec()
        .then(doc => {
            if (!doc) {
                return (res.json({ status: 'item does not exist!' }))
            } else {
                return res.status(204).end();
            }
        }).catch((error) => console.log(error))
});
// update organization
route.put('/update-org/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
    Org.findOneAndUpdate(id, update, {
        new: true,
    }).then(result => res.json(result))
        .catch((error) => console.log('ERROR', error))
})

module.exports = route;