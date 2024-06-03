function getStudentIdsSum(students) {
  const reducer = (sum, student) => sum + student.id;
  return students.reduce(reducer, 0);
}
export default getStudentIdsSum;
