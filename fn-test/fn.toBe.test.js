const fn = require('./fn');

// toBe -> Matcher : 숫자나 문자등의 기본 타입값의 대한 비교를 함.
test('1은 1이야.', () => {
    expect(1).toBe(1);
});

test('2더하기 3은 5다', () => {
    expect(fn.add(2, 3)).toBe(5);
});

test('3더하기 3은 5가 아니다', () => {
    expect(fn.add(3, 3)).not.toBe(5);
});

// toBeNull : null 일 경우 통과
// toBeUndefined : undefined면 통과
// toBeDefined : Defined면 통과

test('null은 null입니다.', () => {
    expect(null).toBeNull();
});

// toBeTruthy : true면 통과
// toBeFalsy : false면 통과

test("비어있지 않은 문자열은 true 입니다.", () => {
    expect(fn.add('hello', 'world')).toBeTruthy();
})

// toBeGreaterThan : 크다
// toBeGreaterThanOrEqual : 크거나 같다
// toBeLessThan : 작다
// toBeLessThanOrEqual : 크거나 같다

test("ID는 10자 이하여야 합니다.", () => {
    const id = 'THE_BLACK_ORDER';
    expect(id.length).toBeGreaterThanOrEqual(10);
});

test("비밀번호 4자리.", () => {
    const pw = '1234';
    expect(pw.length).toEqual(4);
});

test("0.1더하기 0.2는 0.3입니다.", () => {
    // toBeCloseTo => 근사값
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello World에 a라는 문자가 있니?.", () => {
    // toMatch => 정규식을 사용한 Match
    expect("Hello World").toMatch(/H/i);
});

// toContain => 배열에서 특정요소가 있는지 확인

test("유저 리스트에 Mike가 있는지 확인.", () => {
    const user = "Tom";
    const userList = ["Tom", "Jane", "Kane"];
    expect(userList).toContain(user)
});