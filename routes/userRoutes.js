const router = require('express').Router()
const { User } = require('../models')

// GET all Users
router.get('/users', (req, res) => {
  User.find()
    .then(users => { res.json(users) })
    .catch(err => console.log(err))
})

// POST one User
router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

// PUT one User
router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one User
router.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router