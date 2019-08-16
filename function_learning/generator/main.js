'use strict';

// basic
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

var a = foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

// using for ... of iterator
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++;
    }
    return;
}

for (var x of fib(10)) {
    console.log(x);
}
