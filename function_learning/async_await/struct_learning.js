'use strict';

var main = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    }).then((value) => { console.log(value) });
}

main();

console.log('test');