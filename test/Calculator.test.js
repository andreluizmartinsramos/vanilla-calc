import Calculator from '../src/components/Calculator.js';

/**
 * Use Case
 *
 * Mortgage Years: 1
 * Rate Intesrest: 1
 * Loan Amount: 10000
 * Tax: 1000
 * Insurance: 300
 *
 * Principle & Interest = 837.85
 * Tax = 83.33
 * Insurance = 25
 * Total = 946.18
 *
 */

test('Calc Insurance', () => {
  const c = new Calculator();
  expect(c.calcTax(12)).toBe(1);
});

test('Calc Tax', () => {
  const c = new Calculator();
  expect(c.calcTax(12)).toBe(1);
});
