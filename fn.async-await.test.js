const fn = require('./fn.async');

test("3초후에 에러가 납니다.", async () => {
    const age = await fn.getAge();
    expect(age).toBe(30);
})