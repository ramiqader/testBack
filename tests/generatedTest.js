Here are the unit tests for the given Node.js Express code using Vitest:
```js
import { describe, it, expect, vi } from 'vitest';
import { add } from './math';

describe('add function', () => {
  it('should add two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should return 0 when adding 0 and 0', () => {
    const result = add(0, 0);
    expect(result).toBe(0);
  });

  it('should throw an error when non-numeric values are passed', () => {
    expect(() => add('a', 2)).toThrowError();
    expect(() => add(2, 'b')).toThrowError();
  });
});
```
Note that since the provided code doesn't contain any Express-related code, I didn't include any mocks for `req` and `res` objects. The tests focus on the `add` function, which is a simple arithmetic operation.

If you had an Express route handler that used the `add` function, it might look like this:
```js
import express from 'express';
import { add } from './math';

const app = express();

router.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = add(a, b);
  res.json({ result });
});
```
To test this route handler, you would need to mock the `req` and `res` objects, like this:
```js
import { describe, it, expect, vi } from 'vitest';
import { add } from './math';
import { getAddHandler } from './routeHandler';

describe('getAddHandler', () => {
  it('should return a JSON response with the result of the add function', () => {
    const req = { query: { a: 2, b: 3 } };
    const res = { json: vi.fn() };
    getAddHandler(req, res);
    expect(res.json).toHaveBeenCalledTimes(1));
    expect(res.json).toHaveBeenCalledWith({ result: 5 });
  });
});
```
In this example, we're testing the `getAddHandler` function, which is the route handler. We create mock `req` and a mock `res` with a `json` method that we can spy on using `vi.fn()`. We then call the `getAddHandler` function with our mock objects and assert that the `json` method was called with the correct arguments.