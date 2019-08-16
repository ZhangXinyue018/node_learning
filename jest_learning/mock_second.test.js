'use strict';

const myMock = jest.fn();

beforeAll(() => {
    console.log("test begins");
});

myMock.mockReturnValueOnce(true).mockReturnValueOnce(false);

test("test mock", () => {
    expect(true).toBeTruthy();
    console.log(myMock());
    console.log(myMock());
});
