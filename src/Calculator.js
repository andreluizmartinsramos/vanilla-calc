import scrollIt from './Scroll.js';

/**
 * A module that manage the calculator issues
 * @module awesome/calculator
 * @description Class to manage all features and behaviors os calculator
 */
class Calculator {
  constructor() {
    this.cleanUp();

    return this;
  }

  init() {
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

  handleCalc() {
    this.cleanUp();

    const resultData = this.getDataFromDOM().makeCalc(this.data);
    this.render(resultData);

    document.querySelector('.result').classList.remove('result--is-clean');

    scrollIt(300, 500, function() { document.querySelector('.result').classList.add('result--is-open') }() );
  }

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

  makeCalc(data) {
    const {
      interestRate, loanAmount, yearsOfMortgage, annualTax, annualInsurance,
    } = data;

    const resultData = {
      principleInterest: Number.parseFloat(
        this.calcPrincipleInterest(interestRate, loanAmount, yearsOfMortgage).toFixed(2),
      ),
      tax: Number.parseFloat(this.calcTax(annualTax).toFixed(2)),
      insurance: Number.parseFloat(this.calcInsurance(annualInsurance).toFixed(2)),
    };

    resultData.totalMonthlyPayment = (
      resultData.principleInterest
      + resultData.tax
      + resultData.insurance
    ).toFixed(2);

    return resultData;
  }

  calcPrincipleInterest(interestRate, loanAmount, yearsOfMortgage) {
    return (
      ((interestRate / 100 / 12) * loanAmount)
      / (1 - Math.pow(1 + interestRate / 100 / 12, -yearsOfMortgage * 12))
    );
  }

  calcTax(annualTax) {
    return Number(annualTax / 12);
  }

  calcInsurance(annualInsurance) {
    return annualInsurance / 12;
  }

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
