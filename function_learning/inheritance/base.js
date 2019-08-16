'use strict';
const qs = require('qs');

class BaseAdapter {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    async handleResp(requestPromise) {
        console.log("entering");
        let final = await requestPromise
            .then((resp) => {
                console.log(typeof (resp.data));
                return resp.data;
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                } else {
                    console.log(err);
                }
                throw err;
            });
        return final;
    }
}

module.exports = BaseAdapter
