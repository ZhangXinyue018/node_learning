'use strict';

var testList = [
    {
        a: 123,
        b: 123
    }, {
        a: 456,
        b: 456
    }
]

testList.sort((test1, test2) => { return test1.a - test2.a });
console.log(testList);