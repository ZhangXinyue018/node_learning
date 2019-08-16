'use strict';

async function fetchData() {
    return "peanut butter";
}

test('test data to be peanut butter', () => {
    return fetchData().then((data) => {
        expect(data).toBe('peanut butter');
    });
});

async function rejectError() {
    return new Promise((accept, reject) => {
        reject("error");
    });
}

async function throwError() {
    throw new Error("this is a test error");
}

test('async throw error', async () => {
    await expect(throwError()).rejects.toThrow(Error);
});

test('async throw error 2', async () => {
    await expect(rejectError()).rejects.toMatch("error");
});