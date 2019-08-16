'use strict';

class Adapter {
    constructor() {
        this.times = 0;
    }

    async postRequest() {
        console.log(`enter post request at ${Date.now()}`);
        return await this.correlationBack("CorrelationGetRequest", {});
    }

    async CorrelationGetRequest() {
        this.times++;
        console.log(`enter get request at ${Date.now()} for ${this.times} times`);
        return this.times > 3 ? { stage: "done", data: "123" } : { stage: "in_process", data: null };
    }

    async correlationBack(method, payload) {
        var result = {
            stage: "in_process",
            data: null
        };
        while (result.stage === "in_process") {
            await timeout(1000);
            result = await this[method](payload);
        }
        return result.data;
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var testAdapter = new Adapter();
testAdapter.postRequest();