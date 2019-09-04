const express = require('express');
const postDb = require('./postDb.js')

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    postDb.get()
        .then(results => {
            res.status(201).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {
    const postId = req.params.id;

    postDb.getById(postId) 
        .then(results => {
            if (results === undefined) {
                res.status(400).json({ message: "invalid user id" })
            } else {
                req.post = results
                next();
            }
        })
};

module.exports = router;