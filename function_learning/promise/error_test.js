'use strict';

new Promise((resolve, reject) => {
    console.log('error is going to be throw');
    throw new Error('this is an error');
    // reject('123');
    // resolve();
})
    .then(() => { console.log('do nothing') })
    .catch(err => { console.log('error detected, but I choose to ignore it') })
    .finally(() => { console.log('which ever cases, it goes to finall') });