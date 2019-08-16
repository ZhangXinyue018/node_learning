'use strict';

// => function the same as lambda
var a = (x, y) => x * x + y * y;
console.log(a(1, 2));


// this is arrow function will refer to obj outside arrow function
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
};
console.log(obj.getAge());