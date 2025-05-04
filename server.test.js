import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js'; // Make sure app.js uses ES modules if you're using import syntax

describe('GET /', () => {
  it('should return hello world', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('hello world');
  });
});

describe('GET /favourite', () => {
  it('should return JSON message', async () => {
    const res = await request(app).get('/favourite');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from the server!' });
  });
});
