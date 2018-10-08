const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/api/blogs/', (req, res) => {
    Blog
        .find()
        .then(blogs => {
            res.status(200).json(blogs);
    });
});
router.get('/api/blogs/featured', (req, res) => {
    User
        .where()
        .then(users => {
            res.status(200).json(users);
    });
});
router.get('/api/blogs/:id', (req, res) => {
    User
        .findById(req.params.id)
        .then(blog => {
            res.status(200).json(blog);
        });
});
router.post('/api/blogs', (req, res) => {
    let newBlog = new Blog(req.body);
    newBlog
        .save(req.params.id)
        .then(blog => {
            res.status(200).json(blog);
        });
});
router.put('/api/blogs/:id', (req, res) => {
    User
        .findByIdAndUpdate(req.params.id)
        .then(blog => {
            blog ? res.status(200).json(blog) : res.status(404).send();
        });
});
router.delete('/api/blogs/:id', (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(blog => {
            blog ? res.status(200).json(blog) : res.status(404).send();
        });
});
module.exports = router;