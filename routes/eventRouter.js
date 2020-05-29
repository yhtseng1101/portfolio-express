const express = require('express');
const bodyParser = require('body-parser');

const eventRouter = express.Router();

eventRouter.use(bodyParser.json());

eventRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the events to you');
})
.post((req, res) => {
    res.end(`Will add the event: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.end(`Will update the event: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end('Deleting all events');
});

module.exports = eventRouter;