// 0-calcul.test.js
/*eslint-disable*/
const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test case 1: Whole numbers
const result1 = calculateNumber(1, 3);
assert.strictEqual(result1, 4);

// Test case 2: Decimal input (rounding up)
const result2 = calculateNumber(1, 3.7);
assert.strictEqual(result2, 5);

// Test case 3: Decimal input (both numbers rounded)
const result3 = calculateNumber(1.2, 3.7);
assert.strictEqual(result3, 5);

// Test case 4: Decimal input (both numbers rounded up)
const result4 = calculateNumber(1.5, 3.7);
assert.strictEqual(result4, 6);

console.log('All tests passed!');
