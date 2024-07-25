// 6-payment_token.js
/*eslint-disable*/
/**
 * Gets a payment token from the API.
 * @param {boolean} success - Indicates whether the API call is successful.
 * @returns {Promise<object>} - A resolved promise with the response object.
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Return a rejected promise (you can customize the error message if needed)
    return Promise.reject(new Error('API call failed'));
  }
}

module.exports = getPaymentTokenFromAPI;
