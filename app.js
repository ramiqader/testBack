import express from 'express';
const app = express();

app.get('/favourite', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ message: 'Hello from the server!' });
});

app.get('/', (req, res) => {
  res.send("hello world");
});

export default app;
