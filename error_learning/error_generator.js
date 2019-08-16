'use strict';

class TypeAError extends Error {
    constructor(message, extra) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        if (extra) this.extra = extra;
        this.errorCode = "A";
    }
}

class TypeBError extends Error { }

module.exports.errorGenerator = async (name) => {
    var err;
    switch (name) {
        case "a":
            err = new TypeAError("type a error");
            break;
        case "b":
            err = new TypeBError("type b error");
            break;
        default:
            err = new Error("test error");
    }
    throw err
}