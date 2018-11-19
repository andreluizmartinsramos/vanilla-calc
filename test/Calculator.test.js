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

// const c = new Calculator();
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
  expect(Calculator.calcInsurance(annualInsurance)).toBe(25);
});

test('Calc Tax', () => {
  expect(Calculator.calcTax(annualTax)).toBe(83.33);
});

test('Calc Tax', () => {
  expect(Calculator.calcPrincipleInterest(interestRate, loanAmount, yearsOfMortgage)).toBe(837.85);
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
  expect(Calculator.makeCalc(data)).toEqual(dataResult);
});

/**
 * SOURCE CODE - ONLY TO TEST ON VANILLAJS - THE BETTER WAY WOULD BE WORKS WITH MODULE (EXPORT/IMPORT)
 */

const Calculator = {
  makeCalc(data) {
    try {
      // Destruction ES6
      const {
        interestRate, loanAmount, yearsOfMortgage, annualTax, annualInsurance,
      } = data;

      // Object to be rendered
      const resultData = {
        // Calc and keep the Principle Interest
        principleInterest: Number.parseFloat(
          this.calcPrincipleInterest(interestRate, loanAmount, yearsOfMortgage).toFixed(2),
        ),

        // Calc and keep the Tax
        tax: Number.parseFloat(this.calcTax(annualTax).toFixed(2)),

        // Calc the Insurance
        insurance: Number.parseFloat(this.calcInsurance(annualInsurance).toFixed(2)),
      };

      // Processing the payment
      resultData.totalMonthlyPayment = (
        resultData.principleInterest
        + resultData.tax
        + resultData.insurance
      ).toFixed(2);

      return resultData;
    } catch (e) {
      throw new Error(e);
    }
  },
  calcPrincipleInterest(interestRate, loanAmount, yearsOfMortgage) {
    return Number(
      (
        ((interestRate / 100 / 12) * loanAmount)
        / (1 - Math.pow(1 + interestRate / 100 / 12, -yearsOfMortgage * 12))
      ).toFixed(2),
    );
  },
  calcTax(annualTax) {
    return Number((annualTax / 12).toFixed(2));
  },

  /**
   * Method to calc the annualInsurance
   * @function calcInsurance
   * @description Calc implemented according bussines rule
   * @param {annualInsurance} Number Insurance Rate
   * @return {Number} Result of count
   * */

  calcInsurance(annualInsurance) {
    return Number((annualInsurance / 12).toFixed(2));
  },
};
