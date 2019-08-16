'use strict';

var balance = 100;


// conclusion: it better to fix all IO actions in main event or all IO actions in callback
// never seperate logic to different events
async function deduct() {
    if (balance > 51) {
        console.log('process balance change');
        return await new Promise((resolve, reject) => {
            balance = balance - 51;
            setTimeout(() => {
                // this will cause issue
                // balance = balance - 51;
                resolve();
            }, 2000);
        });
    } else {
        console.log('balance not enough, balance = ' + balance);
    }
}

deduct().then(() => { console.log(balance); });
deduct().then(() => { console.log(balance); });
// var a;
// console.log('enter for loop');
// for (var i = 0; i < 10000000000; i++) {
//     a = 100;
// }
// console.log('exit for loop');