'use strict';

function* fetchUser() {
    const user = yield getData();
    console.log(user);
    return "done"
}

function getData() {
    return { name: 'test', year: '2019' };
}

var fetchGen = fetchUser();
console.log(fetchGen.next());
console.log(fetchGen.next({ name: 'a_second' }));