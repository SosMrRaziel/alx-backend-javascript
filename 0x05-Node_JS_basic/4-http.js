// 4-http.js
/*eslint-disable*/
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is running on http://127.0.0.1:1245/');
});

module.exports = app;
