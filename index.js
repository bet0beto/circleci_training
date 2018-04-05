const express = require('express');

const app = express();

app
  .get('/', (req, res) => {
    res.send('Hello world');
  })
  .get('/hi', (req, res) => {
    res.send('hi');
  });

app.listen(8080);
