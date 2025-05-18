import { add } from './add.js';

jest.mock('express', () => ({
  request: jest.fn(),
  response: jest.fn(),
}));

describe('math', () => {
  it('adds two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('req is not used in the add function', () => {
    const req = { params: { id: 1 } };
    add(2, 3);
    expect(req).toHaveBeenCalledTimes(0);
  });

  it('does not use res', () => {
    const res = { send: jest.fn() };
    add(2, 3);
    expect(res.send).toHaveBeenCalledTimes(0);
  });
});