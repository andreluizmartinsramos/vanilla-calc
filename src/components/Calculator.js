import scrollIt from './Scroll.js';

/**
 * A module that manage the calculator issues
 * @module Calculator
 * @description Class to manage all features and behaviors os calculator
 */
class Calculator {
  /**
   * Method to initialize the calculator
   * @function init
   * @description Apply all listners in the DOM
   * */
  init() {
    this.cleanUp();

    document.getElementById('btnCalc').addEventListener('click', () => this.handleCalc());

    document.querySelector('.rangeMortgage').addEventListener('input', (e) => {
      this.cleanUp();
    });
    document.querySelector('.rangeInterest').addEventListener('input', (e) => {
      this.cleanUp();
    });
    document.querySelector('.loan-row__value').addEventListener('input', (e) => {
      this.cleanUp();
    });
    document.querySelector('.annualTax').addEventListener('input', (e) => {
      this.cleanUp();
    });
    document.querySelector('.annualInsurance').addEventListener('input', (e) => {
      this.cleanUp();
    });
  }

  /**
   * Method to get the necessary input data to handleCalc()
   * @function getDataFromDOM
   * @description Fiil the object from DOM inputs: interestRate, loanAmount, yearsOfMortgage, annualTax, annualInsurance
   * @return {Calculator|false} If all data is Ok return Calculator, case not returns false and populate the this.errors
   * */
  getDataFromDOM() {
    const interestRate = document.querySelector('.rangeInterest__value').value;
    const loanAmount = document.querySelector('.loan-row__value').value;
    const yearsOfMortgage = document.querySelector('.rangeMortgage__value').value;
    const annualTax = document.querySelector('.annualTax').value;
    const annualInsurance = document.querySelector('.annualInsurance').value;

    if (loanAmount == '' || loanAmount <= 0) {
      this.errors.push({ field: '.loan-row__value', msg: 'Mandaroy numeric field' });
    }

    if (annualTax == '' || annualTax <= 0) {
      this.errors.push({ field: '.annualTax', msg: 'Mandaroy numeric field' });
    }

    if (annualInsurance == '' || annualInsurance <= 0) {
      this.errors.push({ field: '.annualInsurance', msg: 'Mandaroy numeric field' });
    }

    this.data = {
      interestRate,
      loanAmount,
      yearsOfMortgage,
      annualTax,
      annualInsurance,
    };

    if (this.errors.length > 0) {
      return false;
    }
    return this;
  }

  /**
   * Method that listen the actions comming btnCalc
   * @function handleCalc
   * @description The execute all process of calc. Process: cleanUp, getDataFromDOM, makeCalc and render.
   * */
  handleCalc() {
    // Clean up all errors to start a new process
    this.cleanErrors();

    // Prepare Object to execute new calc
    this.cleanUp();

    // Counts the values according the formula
    if (this.getDataFromDOM()) {
      // Make all calcs callings the bussiness functions
      const resultData = this.makeCalc(this.data);

      // Render process
      this.render(resultData);

      // DOM procedures to show data
      document.querySelector('.calculator__button').innerHTML = 'RECALCULATE';
      document.querySelector('.result').classList.remove('result--is-clean');
      scrollIt(
        300,
        500,
        (function () {
          document.querySelector('.result').classList.add('result--is-open');
        }()),
      );
    } else {
      this.paintErrors();
    }
  }

  /**
   * Method to clean attr of the object Calculator
   * @function cleanUp
   * @description Set null all attr of the this.data and render default resultData ("$ - -")
   * */

  cleanUp() {
    this.data = {
      interestRate: null,
      loanAmount: null,
      yearsOfMortgage: null,
      annualTax: null,
      annualInsurance: null,
    };
    const resultData = {
      principleInterest: '- -',
      tax: '- -',
      insurance: '- -',
      totalMonthlyPayment: '- -',
    };

    document.querySelector('.result').classList.remove('result--is-open');
    document.querySelector('.result').classList.add('result--is-clean');
    this.render(resultData);
  }

  /**
   * Method that execute and call all procudures to calc
   * @function makeCalc
   * @description Process the calc calling: calcPrincipleInterest(), calcTax(), calcInsurance()
   * @param {data} Object All data necessary to make the calc
   * @return {Object} Delivery the resultData processed and patterned 00.00
   * */

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
  }

  /**
   * Method to calc the PrincipleInterest
   * @function calcPrincipleInterest
   * @description Calc implemented according bussines rule
   * @param {interestRate} Number Interest Rate
   * @param {loanAmount} Number Loan Amount
   * @param {yearsOfMortgage} Number Years Of Mortgage
   * @return {Number} Result of count
   * */

  calcPrincipleInterest(interestRate, loanAmount, yearsOfMortgage) {
    return Number(
      (
        ((interestRate / 100 / 12) * loanAmount)
        / (1 - Math.pow(1 + interestRate / 100 / 12, -yearsOfMortgage * 12))
      ).toFixed(2),
    );
  }

  /**
   * Method to calc the annualTax
   * @function calcTax
   * @description Calc implemented according bussines rule
   * @param {interestRate} Number Tax Rate
   * @return {Number} Result of count
   * */

  calcTax(annualTax) {
    return Number((annualTax / 12).toFixed(2));
  }

  /**
   * Method to calc the annualInsurance
   * @function calcInsurance
   * @description Calc implemented according bussines rule
   * @param {annualInsurance} Number Insurance Rate
   * @return {Number} Result of count
   * */

  calcInsurance(annualInsurance) {
    return Number((annualInsurance / 12).toFixed(2));
  }

  /**
   * Method to render a resultData
   * @function render
   * @description Put in the  DOM the fields according with resultData matches
   * @param {resultData} Object Attr: principleInterest, tax, insurance, totalMonthlyPayment
   * */

  render(resultData) {
    const {
      principleInterest, tax, insurance, totalMonthlyPayment,
    } = resultData;

    document.querySelector('.principle-interest').innerHTML = `$ ${principleInterest}`;
    document.querySelector('.tax').innerHTML = `$ ${tax}`;
    document.querySelector('.insurance').innerHTML = `$ ${insurance}`;
    document.querySelector('.total').innerHTML = `$ ${totalMonthlyPayment}`;
  }

  /**
   * Method to render the errors on DOM
   * @function paintErrors
   * @description Apply in all this.errors the 'is-invalid' modifier
   * */

  paintErrors() {
    this.errors.forEach((e) => {
      document.querySelector(`${e.field}--error`).innerHTML = e.msg;
      document.querySelector(`${e.field}--error`).classList.add('is-invalid');
      document.querySelector(e.field).classList.add('is-invalid');
    });
  }

  /**
   * Method to clena all errors
   * @function cleanErrors
   * @description Clean all errors from the screen and retake this.errors as a blank array
   * */

  cleanErrors() {
    this.errors = [];

    document.querySelector('.annualTax--error').classList.remove('is-invalid');
    document.querySelector('.annualInsurance--error').classList.remove('is-invalid');
    document.querySelector('.loan-row__value--error').classList.remove('is-invalid');

    document.querySelector('.annualTax').classList.remove('is-invalid');
    document.querySelector('.annualInsurance').classList.remove('is-invalid');
    document.querySelector('.loan-row__value').classList.remove('is-invalid');
  }
}

export default Calculator;
