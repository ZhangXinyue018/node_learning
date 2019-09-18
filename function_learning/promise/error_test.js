'use strict';

const test = async () => {
    test2()
        .then(() => {
            throw new Error('this is an error');
            console.log('do nothing');
        })
        .catch(err => { console.log('error detected, but I choose to ignore it') });
    // .finally(() => { console.log('which ever cases, it goes to finall') });
    console.log("end");
}

const test2 = async () => {
    console.log('error is going to be throw');
}


test();
