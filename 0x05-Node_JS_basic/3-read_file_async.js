// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
        const students = lines.map((line) => line.split(','));

        const csStudents = students.filter((student) => student[3] === 'CS');
        const sweStudents = students.filter((student) => student[3] === 'SWE');

        console.log(`Number of students: ${students.length - 1}`);
        console.log(
          `Number of students in CS: ${csStudents.length}. List: ${csStudents
            .map((s) => s[0])
            .join(', ')}`
        );
        console.log(
          `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents
            .map((s) => s[0])
            .join(', ')}`
        );

        resolve();
      }
    });
  });
}

module.exports = countStudents;
