// 4-payment.test.js
/*eslint-disable*/
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM operation', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon
      .stub(Utils, 'calculateNumber')
      .returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify stub and spy
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
