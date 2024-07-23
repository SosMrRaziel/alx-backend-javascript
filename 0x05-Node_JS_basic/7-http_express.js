// 7-http_express.js
/*eslint-disable*/
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  readDatabase((students) => {
    res.send(
      `This is the list of our students\nNumber of students: ${
        students.length - 1
      }\nNumber of students in CS: ${
        students.filter((s) => s[3] === 'CS').length
      }. List: ${students
        .filter((s) => s[3] === 'CS')
        .map((s) => s[0])
        .join(', ')}\nNumber of students in SWE: ${
        students.filter((s) => s[3] === 'SWE').length
      }. List: ${students
        .filter((s) => s[3] === 'SWE')
        .map((s) => s[0])
        .join(', ')}`
    );
  });
});

app.listen(1245, () => {
  console.log('Server is running on http://127.0.0.1:1245/');
});

module.exports = app;
