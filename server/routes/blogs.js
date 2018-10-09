const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', (req, res) => {
    Blog
        .find()
        .then(blogs => {
           blogs ? res.status(200).json(blogs) : res.status(404).send();
    });
});
router.get('/featured', (req, res) => {
    Blog
        .where({ blogs: 'featured' })
        .then(blog => {
            blog ? res.status(200).json(blog) : res.status(404).send();
    });
});
router.get('/:id', (req, res) => {
    Blog
        .findById(req.params.id)
        .then(blog => {
            blog ? res.status(200).json(blog) : res.status(404).send();
        });
});
router.post('/', (req, res) => {
    let newBlog = new Blog(req.body);
    newBlog
        .save(req.params.id)
        .then(blog => {
            blog ? res.status(201).json(blog) : res.status(404).send();;
        });
});
router.put('/:id', (req, res) => {
    Blog
        .findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(blog => {
            blog ? res.status(204).json(blog) : res.status(404).send();
        });
});
router.delete('/:id', (req, res) => {
    Blog
        .findByIdAndRemove(req.params.id)
        .then(blog => {
            blog ? res.status(200).json(blog) : res.status(404).send();
            done();
        });
});
module.exports = router;