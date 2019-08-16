'use strict';

const express = require('express');
const memwatch = require('node-memwatch');

const logger = require('./common/logger').logger
const HTTP_PORT = require('./config').HTTP_PORT;

const routers = require('./controllers/router');
const swagger = require('./plugins/swaggerPlugin')

module.exports.createApp = async () => {
    // add memory leak check
    memwatch.on('leak', function (info) {
        logger.error('mem leak!!!');
        logger.error(info);
    });

    // start express project
    const app = express();

    // configure api routers
    await routers.createApis(app);

    // configure swagger
    await swagger.runSwagger(app);

    // start app
    app.listen(HTTP_PORT, () => {
        console.log(`Example app listening on port ${HTTP_PORT}!`)
    });
}