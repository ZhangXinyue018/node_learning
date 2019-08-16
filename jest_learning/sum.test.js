'use strict';

const sum = require('./sum').sum;

test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('add 1 + 2 to not equal 4', () => {
    expect(sum(1, 2)).not.toBe(4);
});

test('object equals to object', () => {
    expect({ name: 'test', age: 18 })
        .toEqual({ name: 'test', age: 18 });
});

test('object not equals to object', () => {
    expect({ name: 'test', age: 18 })
        .not.toEqual({ name: 'test1', age: 18 });
});

const testlist = ['a', 'b', 't', 'n'];
test('test list has sth on it', () => {
    expect(testlist).toContain('b');
    expect(testlist).not.toContain('c');
});

const errFunction = () => {
    throw new Error("test");
};

test('throw an error', () => {
    // expect.assertions(1);
    expect(errFunction).toThrow(Error);
});