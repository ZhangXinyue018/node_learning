'use strict';

const StateMachine = require("javascript-state-machine");

var FSM = StateMachine.factory({
    data: (poId) => {
        return { poId: poId };
    },
    transitions: [
        { name: 'goto', from: '*', to: (s) => { return s; } },
        { name: 'accept', from: 'received', to: 'processing' },
        { name: 'finalize', from: 'processing', to: 'success' },
        { name: 'reject', from: 'received', to: 'fail' }
    ],
    methods: {
        init: async function () {
            // get status from rpc call
            // this.poInfo = {
            //     custodianAcceptStatus: "Accepted1",
            //     tokenCreatorAcceptStatus: "Accepted",
            //     mintTokenStatus: "Registered"
            // };
            if (!this.poInfo) {
                return;
            }
            if (this.poInfo.custodianAcceptStatus !== "Accepted" && this.poInfo.tokenCreatorAcceptStatus !== "Accepted") {
                this.goto('received');
            } else if (this.poInfo.mintTokenStatus !== "Minted") {
                this.goto('processing');
            } else {
                this.goto('success');
            }
        },
        hasState: function () {
            return this.state !== 'none';
        },
        onBeforeAccept: async function () {
            console.log(this.poId);
            console.log(this.poInfo);
            // throw new Error("test accept failure");
        },
        onBeforeReject: async function () {

        },
        onInvalidTransition: async function (transition, from, to) {
            throw new Error(`error transaction from ${from} to ${to}`);
        }
    }
});

var b = async () => {
    var a = new FSM("1234");
    await a.init();
    if (a.hasState()) {
        console.log(`has state ${a.state}`);
    } else {
        console.log(`no state ${a.state}`);
    }
    console.log(a.poId);
    // await a.reject()
    //     .then(console.log(a.state))
    //     .catch((err) => {
    //         console.log(err.message);
    //     });
    // console.log(a.state);
};

b();