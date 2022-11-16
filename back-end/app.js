const express = require('express');

const app = express();
const cors = require('cors');

const bookController = require('./controllers/bookController.js');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Scholar Sheep!');
});
app.use('/api/books', bookController);

app.get('*', (req, res) => {
  res.status(403).send('Not Found!');
});

module.exports = app;
