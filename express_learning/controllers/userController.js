'use strict';

function getUser(req, resp) {
    console.log(req.requestId);
    resp.send('Hello from user Api, this is a get function');
}

function updateUser(req, resp) {
    resp.send('Hello from user Api, this is a post function');
}

function getAllUser(req, resp) {
    resp.send('Hello from user Api, this is a get all function');
}

module.exports = {
    getUser: getUser,
    updateUser: updateUser,
    getAllUser: getAllUser
}