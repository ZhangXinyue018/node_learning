'use strict';

var globalVar = 0;

async function tempSum(a, b) {
    if (globalVar !== 0) {
        await sleep(3000);
    }
    globalVar = a + b;
    return a + b;
}

function sleep(ms) {
    console.log("enter sleep");
    return new Promise(resolve => setTimeout(resolve, ms));
}

const testCases = [
    {
        name: "test 1",
        input: {
            a: 1,
            b: 2
        },
        expect: 3
    },
    {
        name: "test 2",
        input: {
            a: 1,
            b: 3
        },
        expect: 4
    }
]

describe("test", () => {
    for (let i = 0; i < testCases.length; i++) {
        var element = testCases[i];
        test(element.name, async (done) => {
            var result = await tempSum(element.input.a, element.input.b);
            expect(result).toBe(element.expect);
            done();
        })
    }
});