// DEPENDENCIES

const express = require('express');
const cors = require('cors');

//configuration
const app = express(); //invoke express and save in app

//Middleware
app.use(express.json());
app.use(cors());

// ROUTES
//home route

app.use('/', (req, res) => {
  res.send('Welcome to Scholar Sheep');
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

module.exports = app;
