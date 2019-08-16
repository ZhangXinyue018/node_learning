'use strict';

function* fetchUser() {
    const user = yield apiCall();
}

function apiCall() {
    console.log('begin api call');
    return new Promise(resolve => {
        console.log('begin promise');
        setTimeout(() => {
            resolve({ 'name': 'test', year: '2019' });
        }, 2000);
    });
}

var fetchGen = fetchUser();
console.log(fetchGen.next().value);
// console.log(fetchGen.next().value.then(n => console.log(n)));