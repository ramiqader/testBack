// import { describe, it, expect } from 'vitest';
// import { add } from './add.js';

// describe('add function', () => {
//     it('adds two numbers', () => {
//       expect(add(2, 3)).toBe(5);
//     });

//     it('adds two negative numbers', () => {
//       expect(add(-2, -3)).toBe(-5);
//     });

//     it('adds a positive and a negative number', () => {
//       expect(add(2, -3)).toBe(-1);
//     });
//   });
import { describe, it, expect, vi } from 'vitest';
import { add } from './add.js';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should return 0 when adding 0 and 0', () => {
    const result = add(0, 0);
    expect(result).toBe(0);
  });

});