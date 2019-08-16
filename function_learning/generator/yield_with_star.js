'use strict';

function* g1() {
    yield 2;
    yield 3;
    yield 4;
}

function* g2() {
    yield 1;
    yield* g1();
    yield 5;
}

for (var iterator of g2()) {
    console.log(iterator);
}
