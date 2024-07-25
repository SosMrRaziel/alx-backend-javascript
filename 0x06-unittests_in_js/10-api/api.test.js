// 10-api/api.test.js
/*eslint-disable*/
const request = require('request');
const { expect } = require('chai');

describe('Available Payments', () => {
  it('should return correct payment methods', (done) => {
    request(
      'http://localhost:7865/available_payments',
      (error, response, body) => {
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      }
    );
  });
});

describe('Login', () => {
  it('should return a welcome message with the provided username', (done) => {
    const userName = 'Betty';
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName },
      },
      (error, response, body) => {
        expect(body).to.equal(`Welcome ${userName}`);
        done();
      }
    );
  });
});
