// app.test.js
import { describe, it, expect } from '@jest/globals';
import { req, res } from 'supertest';

// Import the route handlers to be tested
import { favouriteHandler, indexHandler } from './app';

describe('Favourite Route Handler', () => {
  it('sets CORS header and returns JSON response', async () => {
    const req = { method: 'GET', url: '/favourite' } };
    const res = { set: jest.fn(), json: jest.fn((data) => ({ data })) };
    await favouriteHandler(req, res);
    expect(res.set).toHaveBeenCalledTimes(1);
    expect(res.set).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*');
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: 'Hello from the server!' });
  });
});

describe('Index Route Handler', () => {
  it('returns a simple "hello world" string', async () => {
    const req = { method: 'GET', url: '/' } };
    const res = { send: jest.fn((data) => ({ data })) };
    await indexHandler(req, res);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith("hello world");
  });
});