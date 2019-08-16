'use strict';

const jwt = require('jsonwebtoken');
const { tokenKey } = require('./key');

let token = jwt.sign(
    {
        email: "test@test.com"
    },
    tokenKey
);
console.log(token);

jwt.verify(token, tokenKey + "123", (err, payload) => {
    if (err){
        console.log("not verified");
        return
    }
    console.log(payload);
})