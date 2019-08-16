'use strict';

var a = [1, 5, 30, 9, 8, 6, 2];

console.log('test all s > 7: ' + a.every(function (s) {
    return s > 7;
}));

console.log('test all s > 0: ' + a.every(function (s) {
    return s > 0;
}));

console.log('find any s > 7: ' + a.find(function (s) {
    return s > 7;
}));

console.log('find any s > 33: ' + a.find(function (s) {
    return s > 33;
}));