import { range } from "./index";

describe('test index.ts', () => {
  it(`has 2`, () => {
    expect(range(1, 3)).toContain(2);
  })
})