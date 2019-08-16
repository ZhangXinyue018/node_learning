'use strict';

function get_operation(name = 'add', x, y) {
    var return_function;
    switch (name) {
        case 'add':
            return_function = function () {
                return x + y;
            };
            break;
        case 'sub':
            return_function = function () {
                return x - y;
            };
            break;
        case 'multi':
            return_function = function () {
                return x * y;
            };
            break;
        case 'div':
            return_function = function () {
                return x / y;
            };
            break;
        default:
            return_function = function () {
                return 0;
            }
    }
    return return_function
}

var new_operation_1 = get_operation('sub', 1, 2);
var new_operation_2 = get_operation('sub', 1, 2);
console.log(new_operation_1());
console.log(new_operation_1 === new_operation_2);


// change two params to one
function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5));
console.log(pow3(7)); 