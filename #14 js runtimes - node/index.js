import express from 'express';

/**
 * Express webserver that returns static html with the title Hello World
 */

const app = express();

app.get('/', (req, res) => {
  res.send('<html><h1>Hello World</h1></html>');
});

app.get('/users', (req, res) => {
  res.json({
    users: [
      {
        name: 'John Doe',
        age: 30,
      },
      {
        name: 'Jane Doe',
        age: 31,
      },
    ],
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// nodemon is javascript that runs during development time
