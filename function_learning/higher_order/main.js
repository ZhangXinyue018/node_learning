'use strict';

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function operation(func, a, b) {
    return func(a, b);
}

console.log(operation(sub, 1, 2));


// using filter
var a = [1, 5, 30, 9, 8, 6, 2];
console.log(a.filter(function (x) {
    return x >= 5;
}));

// using sort
console.log(a.sort());
console.log(a.sort(function (x, y) {
    return x > y;
}));