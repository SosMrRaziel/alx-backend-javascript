// 2-calcul_chai.test.js
/*eslint-disable*/
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should perform SUM operation', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should perform SUBTRACT operation', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should perform DIVIDE operation', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should handle invalid operation type', () => {
    expect(calculateNumber('INVALID', 1.4, 4.5)).to.equal(
      'Invalid operation type'
    );
  });
});
