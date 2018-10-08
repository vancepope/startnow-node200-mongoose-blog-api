const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User
        .find()
        .then(user => {
            res.status(200).json(user);
    });
});
router.get('/api/users/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
    });
});
router.get('/api/users/:id', (req, res) => {
    User
        .findById(req.params.id)
        .then(user => {
            res.status(200).json(user);
        });
});
router.post('/api/users/', (req, res) => {
    let newUser = new User(req.body);
    newUser
        .save(req.params.id)
        .then(user => {
            res.status(200).json(user);
        });
});
router.put('/api/users/:id', (req, res) => {
    User
        .findByIdAndUpdate(req.params.id)
        .then(user => {
            user ? res.status(200).json(user) : res.status(404).send();
        });
});
router.delete('/api/users/:id', (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(deletedUser => {
            deletedUser ? res.status(200).json(deletedUser) : res.status(500).send();
        });
});
module.exports = router;