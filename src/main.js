import RangeDecorator from './Range.js';
import Calculator from './Calculator.js';
import Menu from './Menu.js';


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
