const fn = require('./fn.async');

// resolves, rejects
test("3초 후에 받아온 나이는 30", () => {
    // return fn.getAge().then(age => {
    //     expect(age).toBe(31);
    // })

    //return expect(fn.getAge()).resolves.toBe(30);
    //return expect(fn.getAge(30)).rejects.toBe(30);
    return expect(fn.getAge()).rejects.toMatch("error");
});