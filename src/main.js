import RangeDecorator from './Range.js';
import Calculator from './Calculator.js';

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

  const c = new Calculator().init();
})();
