const mockFn = jest.fn();
const mockFn2 = jest.fn(num => num + 1);

//mockFn();
//mockFn(1);

test.skip("함수는 2번 호출됩니다.", () => {
    console.log(mockFn.mock.calls);
    expect(mockFn.mock.calls.length).toBe(2)
})

test.skip("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다.", () => {
    console.log(mockFn.mock.calls);
    expect(mockFn.mock.calls[1][0]).toBe(1);
})

// function forEachAdd1(arr) {
//     arr.forEach(num => {
//         mockFn(num+1)
//     })
// }

//forEachAdd1([10,20,30]);

mockFn2(10);
mockFn2(20);
mockFn2(30);

test("함수 호출은 3번 됩니다.", () => {
    expect(mockFn.mock.calls.length).toBe(3);
})