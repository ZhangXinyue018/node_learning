'use strict';

class Temp {
    async correlationBack(name, payload){
        throw new Error("This is a test error");
    }
}

async function test (name, payload){
    throw new Error("this is a test test error");
}

class NewTemp extends Temp{
    async cancelOrderAsync(callback) {
        this.correlationBack("Test",{ orderID: "1", processToCheck: "cancel" })
            .then(result => { callback(result); })
            .catch(err => { 
                console.log("detect an error, pass it to callback");
                callback(null, err); 
            });
    }
}

var tempObj = new NewTemp();

const GeneralCallBack = (requestId) => (result, err) => {
    try {
        if (err) {
            console.log("error is detected, set callback msg to error");
            console.log(err.message);
            console.log(err.stack);
            console.log(requestId);
        } else {
            console.log("success");
            console.log(requestId);
        }
    } catch (err) {
        console.log(err.message);
        console.log(err.stack);
    }
};

(async ()=>{
    tempObj.cancelOrderAsync(GeneralCallBack(123));
})();