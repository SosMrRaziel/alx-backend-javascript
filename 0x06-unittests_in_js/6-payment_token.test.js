// 6-payment_token.test.js
/*eslint-disable*/
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct response object when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({
          data: 'Successful response from the API',
        });
        done();
      })
      .catch(done); // Fail the test if an error occurs
  });

  // Add more test cases if needed
});
