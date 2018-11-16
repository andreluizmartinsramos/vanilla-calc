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
   * @return {Calculator}
   * */
  getDataFromDOM() {
    this.data = {
      interestRate: document.querySelector('.rangeInterest__value').value,
      loanAmount: document.querySelector('.loan-row__value').value,
      yearsOfMortgage: document.querySelector('.rangeMortgage__value').value,
      annualTax: document.querySelector('.annualTax').value,
      annualInsurance: document.querySelector('.annualInsurance').value,
    };

    return this;
  }

  /**
   * Method that listen the actions comming btnCalc
   * @function handleCalc
   * @description The execute all process of calc. Process: cleanUp, getDataFromDOM, makeCalc and render.
   * */
  handleCalc() {
    // Prepare Object to execute new calc
    this.cleanUp();

    // Counts the values according the formula
    const resultData = this.getDataFromDOM().makeCalc(this.data);

    // Render process
    this.render(resultData);

    console.log(resultData);

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
}

export default Calculator;
