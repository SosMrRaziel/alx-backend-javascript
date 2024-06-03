function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter(
        (grade) => grade.studentId === student.id
      );
      if (grades.length === 0) {
        grades.push({ studentId: student.id });
      }
      student.grade = grades[0].grade;
      return student;
    });
}

export default updateStudentGradeByCity;
