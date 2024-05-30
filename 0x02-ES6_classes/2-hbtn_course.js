export default class HolbertonCourse {
  constructor(name, length, students) {
    this._verifyType(name, 'string');
    this._verifyType(length, 'number');
    this._verifyType(students, 'object');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  _verifyType(attr, type) {
    if (typeof attr !== type) {
      throw TypeError(`${attr} must be a ${type}`);
    }
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get length() {
    return this._length;
  }
  set length(length) {
    this._length = length;
  }
  get students() {
    return this._students;
  }
  set students(students) {
    this._students = students;
  }
}
