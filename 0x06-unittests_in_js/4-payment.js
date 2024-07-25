// 4-payment.js
/*eslint-disable*/
const Utils = require('./utils');

/**
 * Sends a payment request to the API.
 * @param {number} totalAmount - The total amount.
 * @param {number} totalShipping - The total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sumResult = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sumResult}`);
}

// Example usage:
sendPaymentRequestToApi(100, 20);
