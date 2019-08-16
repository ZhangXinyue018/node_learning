'use strict';

const { GetResult, FinalizeRequestId } = require("./adapter");

async function register(req, res) {
    var result = await GetResult();
    res.send(result);
}

async function resolve(req, res) {
    var body = req.body;
    var requestId = req.query.requestId;
    FinalizeRequestId(requestId, body);
    res.send("ok");
}

module.exports = { register, resolve }