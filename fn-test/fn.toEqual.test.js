const fn = require('./fn');

test('3더하기 3은 5가 아니다', () => {
    expect(fn.add(3, 3)).not.toEqual(5);
});

test('이름과 나이를 전달받아서 객체를 변환해줘', () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
        name: "Mike",
        age: 30
    })
})

test('이름과 나이를 전달받아서 객체를 변환해줘', () => {
    expect(fn.makeUser("Mike", 30)).toStrictEqual({
        name: "Mike",
        age: 30
    })
})