const express = require('express');
const app = require('./app');

const colors = require('colors');

require('dotenv').config();

const { PORT } = process.env;

const message = 'Listening on port';

app.listen(PORT, () => {
  console.log(`${message}` + PORT);
});
