'use strict';

class Temp {
    test(msg) {
        console.log(msg);
    }
}

var a = new Temp();

var b = Object.assign({}, a);
b.test = a.test;
b.test("123");