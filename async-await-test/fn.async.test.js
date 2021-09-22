const fn = require("./fn.async");

// callback 패턴

// jest에서 비동기 방식으로 test 하기 위해서는
// 함수에 done을 추가해서 확인 할 수 있다.

test("3초 후에 받아온 이름은 Mike", done => {
    function callback(name) {
        try{
            expect(name).toBe("Mike");
            done();
        } catch(error) {
            done();
        }
    }

    fn.getName(callback);
});