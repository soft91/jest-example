const fn = require('./fn');

// toThrow => 특정 작업을 했을 때 오류

test("이거 에러 인가요?.", () => {
    expect(() => fn.throwErr()).toThrow('xx');
});