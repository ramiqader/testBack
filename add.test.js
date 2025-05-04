import { describe, it, expect, vi } from 'vitest';
import { add } from './add.js';

describe('add function', () => {
  it('should add two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should handle negative numbers', () => {
    const result = add(-2, 3);
    expect(result).toBe(1);
  });

  it('should handle zero', () => {
    const result = add(0, 0);
    expect(result).toBe(0);
  });
});