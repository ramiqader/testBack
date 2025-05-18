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