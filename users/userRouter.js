const express = require('express');
const userDb = require('./userDb.js');

const router = express.Router();

router.use(express.json());

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    userDb.get()
        .then(results => {
            res.status(201).json(results)
        })
        .catch(error => {
            res.status(500).json(error) 
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    // console.log(id);
    userDb.getById(id)
        .then(results => {
            console.log('result from getById', results === undefined)
            res.status(201).json(results) 
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
