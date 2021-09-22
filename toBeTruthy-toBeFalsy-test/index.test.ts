import { toggle } from "./index";

describe(`test index.ts file`, () => {
  it('return false', () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();
  })
})