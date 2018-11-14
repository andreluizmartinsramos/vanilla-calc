/**
 * A module that manage type="range" of DOM
 * @module awesome/range
 */
class Range {
  constructor(obj = '[type=range]', inputBox = '.result', maxNumber = 40, round = false) {
    // Get the DOM properties
    this.inputRange = document.querySelector(obj);
    this.maxNumber = maxNumber;
    this.inputBox = inputBox;
    this.round = round;

    // Apply mask .js
    document.documentElement.classList.add('js');
  }

  /**
   * Method that starts the Range
   * @description Method to paint regarding CSS and control the value
   * @param {null} ' There is no param
   * @return {avoid} There is no return
   * */
  init() {
    this.inputRange.addEventListener(
      'input',
      (e) => {
        // Control the current value for CSS layer apply the mask
        this.inputRange.style.setProperty('--val', +this.inputRange.value);

        // Insert the current value into the input target regarding the round rule.
        if (this.round) {
          document.querySelector(this.inputBox).value = Math.round(
            (this.inputRange.value * this.maxNumber) / 100,
          );
        } else {
          document.querySelector(this.inputBox).value = (this.inputRange.value * this.maxNumber) / 100;
        }
      },
      false,
    );
  }
}

export default Range;
