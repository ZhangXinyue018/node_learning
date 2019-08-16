'use strict';


// three stage of promise: pending, fufilled, rejected

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then((value) => {
    console.log(value);
});

console.log("test print");


// promise flow
// 一个很有趣的现象，所有print都是按顺序并且几乎是立即print，但是done之后等待了差不多4s才结束
// 这是因为settimeout也是一个callback，那么就是说settimeout并没有影响整个promise链的运行
// 那么为什么是4s？而不是12s？猜测是event loop的系统，对于每一个callback都有对应的timer，
// 造成了异步执行的假象
console.log('==================');

function promiseFlow() {
    console.log('========main logic begin========');
    setTimeout(() => { }, 1000);
    console.log('========main logic end========');
    return new Promise((resolve, reject) => {
        console.log('========promise logic begin========');
        setTimeout(() => { }, 4000);
        console.log('========promise logic end========');

        console.log('========callback logic begin========');
        resolve('done');
        console.log('========callback logic end========');
    });
}

var test = promiseFlow().then(promiseFlow).then(promiseFlow).then((value) => {
    console.log(value);
});