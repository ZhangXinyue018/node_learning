'use strict';

const BaseAdapter = require('./base');
const axios = require('axios');
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/centralBankApi/v2/',
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
    responseType: 'json'
});

class TestAdapter extends BaseAdapter {
    constructor() {
        super(axiosInstance);
    }

    async testAsset(/*listAssetsReq*/) {
        return await this.handleResp(
            this.axiosInstance.get('/service/', { responseType: 'json' })
        );
    }
}

const newTest = new TestAdapter();
(async () => {
    var result = await newTest.testAsset()
        .catch((err) => { console.log("do nothing with error"); });
    console.log("===============");
    console.log(result);
    console.log(result.time);
})();

