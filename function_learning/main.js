'use strict';


function foo(a, b, ...rest) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
foo.call(this, "a", "b", "c", "d");


function test() {
    return 0;
}

var test = '123';
console.log(test);
// this will cause an error, because function is an object, and 'test' is redefined as a string,
// 'test' is no longer a function
// console.log(test());