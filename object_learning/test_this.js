'use strict';

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age());

// call function by using array []
console.log(getAge.apply(xiaoming, []));

// call function join the parameters in ','
console.log(getAge.call(xiaoming, 1));