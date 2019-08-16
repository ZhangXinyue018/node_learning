'use strict';

var person = {
    name: 'test',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};

// read from object
var { name, age, passport: id } = person;

console.log('name = ' + name + ', age = ' + age + ', passport id = ' + id);


var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

// this is not applicable, because this doesnot point to xiaoming
// var fn = xiaoming.age; 
// fn(); 
// strictly use the following
console.log(xiaoming.age());

// an interesting way of solving this, try to assign this to that first
// var xiaoming = {
//     name: 'xiaoming',
//     birth: 1990,
//     age: function () {
//         var that = this; 
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth; 
//         }
//         return getAgeFromBirth();
//     }
// };

// xiaoming.age(); // 29