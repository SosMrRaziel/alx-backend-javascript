// 0-calcul.test.js
/*eslint-disable*/
const assert = require('assert');
const calculateNumber = require('./0-calcul');

const result1 = calculateNumber(1, 3);
assert.strictEqual(result1, 4);

const result2 = calculateNumber(1, 3.7);
assert.strictEqual(result2, 5);

const result3 = calculateNumber(1.2, 3.7);
assert.strictEqual(result3, 5);

const result4 = calculateNumber(1.5, 3.7);
assert.strictEqual(result4, 6);

console.log('All tests passed!');
