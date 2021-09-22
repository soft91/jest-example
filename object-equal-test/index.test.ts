import person from './index';

describe(`makes a person`, () => {
  it('makes a person', () => {
    expect(person('Kim', 20)).toEqual({
      name: 'Kim',
      age: 20,
    });
  })
});