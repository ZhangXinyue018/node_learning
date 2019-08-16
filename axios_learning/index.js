'use strict';

const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://icbi-merlion-jenkins-slave-01.sl.cloud9.ibm.com:28080/api/v1/',
    timeout: 1000,
    headers: { "Content-Type": "application/json" }
});

instance.get('/asset/assetTypes')
    .then((res) => {
        // console.log(res)
    })
    .catch((err) => {
        // console.log(err);
    });

const newinstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: { "Content-Type": "application/json" }
});

newinstance.get('/version')
    .then((res) => {
        console.log(res.data.test)
    })
    .catch((err) => {
        console.log(err);
    });


// instance.post('/asset/', {
//     accountID: "string",
//     assetCustodianID: "string",
//     assetID: "string",
//     assetOwnerID: "string",
//     assetTypeName: "string",
//     assetValue: 10,
//     metadata: "string",
//     purchaseOrderID: "string",
//     tokenCreatorID: "string"
// }).then((response) => {
//     console.log(response);
// }).catch((err) => {
//     if (err.response) {
//         console.log("response err");
//         console.log(err.response.data);
//         console.log(err.response.status);
//         console.log(err.response.headers);
//     } else if (err.request) {
//         console.log("request err");
//     } else {
//         console.log("others");
//     }
// })