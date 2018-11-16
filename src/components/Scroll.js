/**
 * A module that implements Scroll behaviors on the page
 * @module Scroll
 * @description Throught 'requestAnimationFrame' was implemented smooth scroll
 */

/**
 * Method to scroll the page
 * @function scrollIt
 * @description Get dimensions and apply according the params the scroll 'destination' throught 'requestAnimationFrame' eventLoop
 * @param {destination} String Target which is gonna be scrolled
 * @param {duration} Intenger Time to duration of easing
 * @param {callback} String The third param is the callback function if applicable
 * */
export default function scrollIt(destination, duration = 500, callback) {

    //Get and normalize some issues about the dimensions and time
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    //While has space to requestAnimationFrame
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }

    /**
     * Function that execute each loop of 'destinationOffsetToScroll'
     * @function scroll
     * @description This function is invoked by requestAnimationFrame() global method
     * */
    function scroll() {

      //Get and normalize some issues about the time
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      window.scroll(0, Math.ceil((time * (destinationOffsetToScroll - start)) + start));

    //if arrived at destination
      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }

      //Request a new interpolation
      requestAnimationFrame(scroll);
    }

    //Scroll more until arrived at destination
    scroll();
  }

