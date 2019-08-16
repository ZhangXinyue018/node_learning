'use strict';

// the param pass in next replace the previous yield value
function* generatorFunction() {
    console.log("This is an enter");
    const x = yield 1;
    console.log("x has value of: " + x);
    const y = yield 2;
    console.log("y has value of: " + y);
}

let generator = generatorFunction();

console.log(generator.next(11));
console.log(generator.next(12));
console.log(generator.next(13));

console.log("====================================");
function* testGenerator() {
    yield;
    foo(yield "Not is use");
    return 123;
}

function foo(x) {
    console.log("Just print argument passed " + x);
}

var testGenerator = testGenerator();

console.log(testGenerator.next());
console.log(testGenerator.next());
console.log(testGenerator.next("test"));