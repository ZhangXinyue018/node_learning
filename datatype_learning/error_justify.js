'use strict';

async function func1() {
    throw new Error("error");
}

async function func2() {
    await func1();
}

var a = async () => {
    await func2().catch(() => { console.log("err"); });
};

a();