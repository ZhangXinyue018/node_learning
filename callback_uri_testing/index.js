'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const { register, resolve } = require("./service");

const PORT = 9090;

var app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/service', register);

app.post('/callback', resolve);

app.listen(PORT, function () {
    console.log(`Listening at http://localhost:${PORT}`);
});