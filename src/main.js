import RangeDecorator from './components/Range.js';
import Calculator from './components/Calculator.js';
import Menu from './components/Menu.js';

  /**
   * Method that starts application
   * @function onload
   * @description This global method is called when all dom is loaded
   * */
onload = (() => {

  // Decorating Range 01
  const rangeMortgage = new RangeDecorator(
    '[class="rangeMortgage"]',
    '.rangeMortgage__value',
    40,
    true,
  );
  rangeMortgage.init();

  // Decorating Range 02
  const rangeInterest = new RangeDecorator(
    '[class="rangeInterest"]',
    '.rangeInterest__value',
    10,
    false,
  );
  rangeInterest.init();

  //Starts Calculator
  const calculator = new Calculator().init();

  //Starts Menu
  const m = new Menu();
  m.init();

})();
