'use strict';

const authService = require('../service/authService');

async function issueAuth(req, res) {
    console.log(req.body);
    let result = authService.checkUser(req.body.userId, req.body.userPassword);
    console.log(result);
    if (result) {
        res.send(authService.produceJWTToken(result.userId, result.userRole));
    } else {
        res.send("not auth");
    }
}

function verifyUser(requiredRole) {
    return authService.verifyAuth(requiredRole);
}

module.exports = {
    issueAuth: issueAuth,
    verifyUser: verifyUser
};