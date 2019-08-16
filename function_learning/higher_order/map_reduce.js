'use strict';

function pow(x) {
    return x * x;
}

var a = [1, 2, 3, 4, 5];
console.log(a.map(pow));

function add(x, y) {
    return x + y;
}

console.log(a.reduce(add));