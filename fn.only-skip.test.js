const { TestScheduler } = require('jest');
const fn = require('./fn');

let num = 0;

test("0 더하기 10은 10!", () => {
    expect(fn.add(num, 10)).toBe(10);
});

test("0 더하기 20은 20!", () => {
    expect(fn.add(num, 20)).toBe(20);
});

test("0 더하기 30은 30!", () => {
    expect(fn.add(num, 30)).toBe(40);
    // fail
});

// test.only("0 더하기 30은 30!", () => {
//     expect(fn.add(num, 30)).toBe(40);
// });

// test.skip("0 더하기 30은 30!", () => {
//     expect(fn.add(num, 30)).toBe(40);
// });