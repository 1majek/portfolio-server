/*import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import {routes} from './routes';*/

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');


const app = express();

let corsOptions = {
    origin: 'http://localhost:4200',
    // origin: 'https://1majek.github.io/stevenmajek',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));


/*app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control -Allow-Methonds,', 'OPTIONS, GET, POST PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${res.ip} ${req.method} ${req.url}`);
        next();
    }
});*/

const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(express.static(__dirname + '../dist/stevenMajek'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

// send email

module.exports = routes;

server.listen(port, () => console.log('Listening to port', port));
