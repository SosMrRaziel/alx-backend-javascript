/* eslint-disable */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._verifyType(name, 'string');
    this._verifyType(length, 'number');
    this._verifyType(students, 'object');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  _verifyType(value, type, attribute) {
    if (typeof value !== type || (type === 'object' && !Array.isArray(value))) {
      throw TypeError(`${attribute} must be a ${type}`);
    }
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._verifyType(name, 'string', 'name');
    this._name = name;
  }
  get length() {
    return this._length;
  }
  set length(length) {
    this._verifyType(length, 'number', 'length');
    this._length = length;
  }
  get students() {
    return this._students;
  }
  set students(students) {
    this._verifyType(students, 'object', 'students');
    this._students = students;
  }
}
