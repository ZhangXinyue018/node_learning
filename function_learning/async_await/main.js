'use strict';

// async means the function return is wrapped with a promise by js
// it is the same as: 
// async function f() {
//     return Promise.resolve(1);
// }
async function f() {
    return 1;
}
f().then((value) => { console.log('received from async function with value: ' + value); });

// await must be used in async function
// await will block until returned
// ...<a Promise>.then((whatever) => {...}), whatever is received will be send to await result
async function f2() {
    let promise1 = new Promise((resolve) => setTimeout(() => { resolve('test1') }, 5000));
    let promise2 = new Promise((resolve) => setTimeout(() => { resolve('test2') }, 5000));
    console.log(new Date());
    console.log('there are some actions in between to wait for all promise to finish, it will take max of pro1 and pro2');
    let promise = await Promise.all([promise1, promise2]);
    console.log(new Date());
    return promise;
}

f2().then((value) => { console.log('received from async function with value: ' + value); });
console.log('this is a test on how main process goes');