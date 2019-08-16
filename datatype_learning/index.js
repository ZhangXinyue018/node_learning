'use strict';

var test = {
    a: "a123",
    b: "b456"
};

var newValue = {
    code: "a"
};

if (test[newValue.code]) {
    console.log("has c");
} else {
    console.log("no c");
}