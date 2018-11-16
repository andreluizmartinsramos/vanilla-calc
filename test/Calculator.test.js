import Calculator from '../src/components/Calculator.js';

/**
 * Test Use Case
 *
 * Only tested business functions, the that have contains DOM interaction wasn't tested,
 * in this case is better aceptation test or .snapshot.
 *
 * ------------------------- INPUTS DATA ------------------------
 * Mortgage Years: 1
 * Rate Intesrest: 1
 * Loan Amount: 10000
 * Tax: 1000
 * Insurance: 300
 */

const c = new Calculator();
const interestRate = 1;
const loanAmount = 10000;
const yearsOfMortgage = 1;
const annualTax = 1000;
const annualInsurance = 300;

/**
 * ---------------------- RESULTS EXPECTED ----------------------
 * Principle & Interest = 837.85
 * Tax = 83.33
 * Insurance = 25
 * Total = 946.18
 * --------------------------------------------------------------
 */

test('Calc Insurance', () => {
  expect(c.calcInsurance(annualInsurance)).toBe(25);
});

test('Calc Tax', () => {
  expect(c.calcTax(annualTax)).toBe(83.33);
});

test('Calc Tax', () => {
  expect(c.calcPrincipleInterest(interestRate, loanAmount, yearsOfMortgage)).toBe(837.85);
});

/**
 * makeCalc - Main Function
 * --------------------------------------------------------------
 */
const data = {
  interestRate,
  loanAmount,
  yearsOfMortgage,
  annualTax,
  annualInsurance,
};

const dataResult = {
  insurance: 25,
  principleInterest: 837.85,
  tax: 83.33,
  totalMonthlyPayment: '946.18',
};

test('Make Calc', () => {
  expect(c.makeCalc(data)).toEqual(dataResult);
});
