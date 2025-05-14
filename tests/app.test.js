import { vi, expect, describe, it } from 'vitest';
import { getFavourite, getRoot } from './app';

describe('Route Handlers', () => {
  describe('GET /favourite', () => {
    it('sets CORS header and returns JSON response', async () => {
      const req = { method: 'GET', url: '/favourite' };
      const res = {
        set: vi.fn(),
        json: vi.fn(),
      };

      await getFavourite(req, res);

      expect(res.set).toHaveBeenCalledTimes(1);
      expect(res.set).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*');
      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith({ message: 'Hello from the server!' });
    });
  });

  describe('GET /', () => {
    it('returns "hello world" response', async () => {
      const req = { method: 'GET', url: '/' };
      const res = {
        send: vi.fn(),
      };

      await getRoot(req, res);

      expect(res.send).toHaveBeenCalledTimes(1);
      expect(res.send).toHaveBeenCalledWith('hello world');
    });
  });
});