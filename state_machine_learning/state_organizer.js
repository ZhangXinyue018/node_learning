'use strict';

const StateMachine = require('javascript-state-machine');

var fsm = new StateMachine({
    init: 'received',
    transitions: [
        { name: 'accept', from: 'received', to: 'processing' },
        { name: 'finalize', from: 'processing', to: 'success' },
        { name: 'reject', from: 'received', to: 'fail' }
    ],
    methods: {
        test: async function (test) {
            console.log({
                test: test,
                state: this.state
            });
        },
        onBeforeAccept: async function () { console.log(`accepting process`); /** throw new Error("test error"); */ },
        onBeforeFinalize: async function () { console.log('finalizing process'); },
        onReject: async function () { console.log('rejecting process'); },
        onInvalidTransition: async function () {
            // console.log(transition);
            throw new Error("invald transition!!!!!");
        }
    }
});

// fsm.observe({
//     onAccept: function () { console.log("this is just an observe function for accept transition") },
//     onProcessing: function () { console.log("this is just an observe function for processing state") }
// });

// console.log(fsm.state);
// try {
//     fsm.accept();
// } catch (err) {
//     console.log("ignore error");
// }
fsm.accept().catch((err) => { console.log(err.message); });
fsm.test("12345");
// console.log(fsm.state);