const fn = require('./fn');

let num = 0;

//test 전 초기화
beforeEach(() => {
    num = 0;
})

// test 후 초기화
afterEach(() => {
    num = 0;
})

test("0 더하기 1은 1이야", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
});

test("0 더하기 2은 4이야", () => {
    num = fn.add(num, 2);
    expect(num).toBe(2);
});

// 비슷한 작업끼리 묶는 Test (describe)
describe("Car 관련 작업", () => {
    let car;

    beforeAll(async() => {
        car = await fn.connectCarDb();
    })
    
    afterAll(async() => {
        car = await fn.disconnectCarDb();
    })
    
    test("이름은 z4", () => {
        expect(car.name).toBe("z4");
    });
    
    test("브랜드는 bmw", () => {
        expect(car.brand).toBe("bmw");
    })
    
    test("색상은 red", () => {
        expect(car.color).toBe("red");
    })
})