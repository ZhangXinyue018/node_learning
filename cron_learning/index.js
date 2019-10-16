'use strict';

const CronJob = require('cron').CronJob;
const express = require('express');
const app = express();

const cronHello = async () => {
    return new CronJob('*/50 * * * * *', function () {
        console.log("hello")
    }, null, true);
}

const cronTest = async () => {
    return new CronJob('*/50 * * * * *', function () {
        console.log("==========test============")
    }, null, true);
}

(async () => {
    app.get('/*', (req, res) => { res.send('return true') })
    app.listen(11111);

    cronHello();
    cronTest();

})()


