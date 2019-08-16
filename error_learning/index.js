'use strict';

const { errorGenerator, TypeAError } = require('./error_generator');

// errorGenerator("a")
//     .catch((err) => {
//         // console.log(err);
//         console.log("detected error");
//         console.log(err.errorCode);
//     });

try {
    throw new TypeAError("", "");
} catch (err) {
    if (err instanceof Error) {
        console.log("instance");
    } else {
        console.log("not instance");
    }
}