// 6-http_express.js
/*eslint-disable*/
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is running on http://127.0.0.1:1245/');
});

module.exports = app;
