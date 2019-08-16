'use strict';

// in this function, x act as a private param that outside cannot access
// but the inc function can be access by this closure structure
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var a = create_counter(0);
console.log(a.inc());
console.log(a.inc());

var b = create_counter(10);
console.log(b.inc());
console.log(b.inc());