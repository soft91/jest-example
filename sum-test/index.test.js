const { sum } = require('./index');

describe(`test index.js file`, () => {
  it('sum 1 + 2 to equal 3', () => {
    expect(sum(1 , 2)).toBe(3);
  });
});