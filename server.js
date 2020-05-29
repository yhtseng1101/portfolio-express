const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const eventRouter = require('./routes/eventRouter');
const guideRouter = require('./routes/guideRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

// 2. still using the app.use of express, but insert morgan middleware
// this will configure morgan to log using the development version, which wil print some additional information 
// we will then let morgan handle the console.log(req.headers)
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/events', eventRouter);
app.use('/guides', guideRouter);

// __dirname is a special varaible name in node, it will refer to the absolute path of the current directory
app.use(express.static(__dirname + '/public'));

// 1. with express: app.use() takes a callback middleware function
app.use((req, res) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});