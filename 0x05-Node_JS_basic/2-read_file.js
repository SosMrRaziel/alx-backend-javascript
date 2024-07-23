// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = {
      CS: [],
      SWE: [],
    };

    lines.forEach((line) => {
      const [firstname, field] = line.split(',');
      if (field === 'CS') {
        students.CS.push(firstname);
      } else if (field === 'SWE') {
        students.SWE.push(firstname);
      }
    });

    console.log(`Number of students: ${lines.length}`);
    console.log(
      `Number of students in CS: ${
        students.CS.length
      }. List: ${students.CS.join(', ')}`
    );
    console.log(
      `Number of students in SWE: ${
        students.SWE.length
      }. List: ${students.SWE.join(', ')}`
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
