'use strict';

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log("Hello from " + this.name);
    }
}

var a = new Student("test");
a.hello();
console.log(a.constructor);
console.log(a.constructor == Student.prototype.constructor);
console.log(a.hello == Student.prototype.hello);


class MathStudent extends Student {
    constructor(name, math_grade) {
        super(name);
        this.grade = math_grade;
    }

    printGrade() {
        console.log('Math grade for ' + this.name + ' is: ' + this.grade);
    }
}

var math_a = new MathStudent("new test", 'A');
math_a.printGrade();