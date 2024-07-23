// 5-http.js
/*eslint-disable*/
const http = require('http');
const fs = require('fs');
const path = require('path');

// Read the database file (passed as an argument)
const databasePath = process.argv[2]; // Assuming the CSV file path is passed as the first argument

function readDatabase(callback) {
  fs.readFile(databasePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the database:', err.message);
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.map((line) => line.split(','));
    callback(students);
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handle the root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Handle the /students path
    readDatabase((students) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.length - 1}\n`);
      res.write(
        `Number of students in CS: ${
          students.filter((s) => s[3] === 'CS').length
        }. List: ${students
          .filter((s) => s[3] === 'CS')
          .map((s) => s[0])
          .join(', ')}\n`
      );
      res.write(
        `Number of students in SWE: ${
          students.filter((s) => s[3] === 'SWE').length
        }. List: ${students
          .filter((s) => s[3] === 'SWE')
          .map((s) => s[0])
          .join(', ')}\n`
      );
      res.end();
    });
  } else {
    // Handle other paths (404)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://127.0.0.1:1245/');
});

module.exports = app;
