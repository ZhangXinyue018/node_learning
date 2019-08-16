'use strict';

var RequestQueue = new Map();
const IdGenerator = require("uuid/v4");

async function GetResult() {
    var requestId = IdGenerator();
    console.log(requestId);
    return await waitCallBack(requestId);
}

function waitCallBack(requestId) {
    return new Promise(resolve => callBackOnRequestId(resolve, requestId));
}

function callBackOnRequestId(resolve, requestId) {
    RequestQueue.set(requestId, resolve);
}

function FinalizeRequestId(requestId, body) {
    var resolve = RequestQueue.get(requestId);
    resolve(body);
}

module.exports = { GetResult, FinalizeRequestId }