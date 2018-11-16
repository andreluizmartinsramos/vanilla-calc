/**
 * A module that manage type="range" of DOM
 * @module Range
 * @description Class to manage all range components
 */
class Range {
  /**
   * Method to construct the Range
   * @function constructor
   * @description Set private variables and start issues of Range
   * @param {objDOM} String Object target to decorate. Default is [type=range]
   * @param {inputBox} String Object target to inform the current number. Default is .resultRange
   * @param {maxNumber} Intenger Limit of max number of bound. Default is 100
   * @param {round} Boolean Define if current value will be delivery rounded or decimals. Default is false.
   * */
  constructor(obj = '[type=range]', inputBox = '.resultRange', maxNumber = 100, round = false) {
    // Get the DOM properties
    this.inputRange = document.querySelector(obj);
    this.maxNumber = maxNumber;
    this.inputBox = inputBox;
    this.round = round;

    // Fill the track according initial state
    this.inputRange.style.setProperty('--val', +this.inputRange.style.getPropertyValue('--val'));

    // Apply mask .js
    document.documentElement.classList.add('js');
  }

  /**
   * Method that starts the Range
   * @function init
   * @description Method to paint regarding CSS and control the value
   * */
  init() {
    this.inputRange.addEventListener('input', (e) => {
      // Control the current value for CSS layer apply the mask
      this.inputRange.style.setProperty('--val', +this.inputRange.value);

      let currentValue = (parseInt(this.inputRange.value) === 0) ? 1 : this.inputRange.value;

      // Insert the current value into the input target regarding the round rule.
      if (this.round) {
        document.querySelector(this.inputBox).value = Math.ceil((currentValue * this.maxNumber) / 100);
      } else {
        document.querySelector(this.inputBox).value = (currentValue * this.maxNumber) / 100;
      }
    }, false);
  }
}

export default Range;
