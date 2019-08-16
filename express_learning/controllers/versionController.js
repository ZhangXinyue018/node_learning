'use strict';

const resMap = new Map();

function getVersion(req, resp) {
    resMap.set("1", resp);
    // resp.send({
    //     'test': 123
    // });
}

function finalizeVersion(req, resp) {
    var tempResp = resMap.get("1");
    tempResp.send({ 'test': 1234 });
    resp.send({ "test": 4567 });
}

const errorCatchMiddleware = fn => (req, resp, next) => {
    Promise.resolve(fn(req, resp, next)).catch(next);
};

async function asyncTest(req, resp, next) {
    await errorFunction2().catch(next);
}

async function errorFunction1() {
    throw new Error("test error 1234567890");
}

async function errorFunction2() {
    console.log("enter error function 2");
    await errorFunction1();
    console.log("leave error function 2");
}

module.exports = {
    getVersion: errorCatchMiddleware(getVersion),
    asyncTest: errorCatchMiddleware(asyncTest),
    finalizeVersion: errorCatchMiddleware(finalizeVersion)
};