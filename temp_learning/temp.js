'use strict';

const sleep = (ms, msg) => {
    return new Promise(resolve =>
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, ms));
}

(async () => {
    var promiseList = [];

    for (var i = 0; i < 5; i++) {
        console.log("add promise");
        promiseList.push(sleep(5000, i));
    }
    await Promise.all(promiseList);
    console.log(`end all`);
})();