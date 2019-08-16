'use strict';

const app = require('./main');

const init = async () => {
    try {
        // this wrap is in case some action is needed before creating app
        await app.createApp();
    } catch (err) {
        console.log(err);
    }
}

init();