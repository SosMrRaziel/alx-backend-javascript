// 2-calcul_chai.js
/*eslint-disable*/
/**
 * Performs mathematical operations based on the given type.
 * @param {string} type - The operation type (SUM, SUBTRACT, or DIVIDE).
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation or an error message.
 */
function calculateNumber(type, a, b) {
  // Round the input numbers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      return 'Invalid operation type';
  }
}

module.exports = calculateNumber;
