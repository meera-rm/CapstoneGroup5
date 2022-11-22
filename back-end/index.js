const express = require('express');

const app = require('./app');

require('dotenv').config();

const { PORT } = process.env || 3333;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
