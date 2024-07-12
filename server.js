const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // or any other port you prefer

app.get('/favourite', (req, res) => {
  // Handle your API logic here
  res.set('Access-Control-Allow-Origin', '*');
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

app.get('/', (req, res) => {
  // Handle your API logic here
  res.send("hello world")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 