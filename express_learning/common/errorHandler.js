'use strict';

module.exports.errorHandler = (err, req, res, next) => {
    console.log("enter error handler");
    console.log(err.message);
    res.status(400);
    res.send("error");
};