'use strict';

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
// these console log will all return 16
// therefore, never use iteraion pointers as closure params
console.log(f1());
console.log(f2());
console.log(f3());

// solution

function count_new() {
    var arr = [];
    for (let i = 1; i <= 3; i++) {
        arr.push((function (a) {
            return function () {
                return a * a;
            }
        })(i));
    }
    return arr;
}

var results_new = count_new();
var f1_new = results_new[0];
var f2_new = results_new[1];
var f3_new = results_new[2];
console.log(f1_new());
console.log(f2_new());
console.log(f3_new());