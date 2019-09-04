const express = require('express');
const userRouter = require('./users/userRouter.js')

const server = express();

server.use('/users', userRouter);

server.use('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {

};

module.exports = server;
