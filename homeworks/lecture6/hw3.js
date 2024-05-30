/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the timer will be reset
 * const printHello = () => console.log('hello')
 * const debouncedFn = debounce(printHello, 1000)
 * debouncedFn()
 * debouncedFn() // timer reset to 1s
 *
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function debounce(func, delay = 1000) {
  // your code here
  let timerID;
  
  return function debouncedCallback(...args) {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
const printHello = (name) => console.log(name, "hello");
const debouncedFn = debounce(printHello);
debouncedFn("My Name");
debouncedFn("Your Name"); // logged

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the call will be ignored
 * const printHello = () => console.log('hello')
 * const throttledFn = throttle(printHello, 1000)
 * throttledFn()
 * throttledFn() // ignored
 *
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function throttle(func, delay = 1000) {
  // your code here
  let timerID;

  const throttledCallback = function (...args) {
    if (timerID) return;
    timerID = setTimeout(() => {
      func.apply(this, args);
      timerID = null;
    }, delay);
  };
  return throttledCallback;
}
const printHello2 = (name) => console.log(name, "hello2");
const throttledFn = throttle(printHello2);
throttledFn("My Name"); // logged
throttledFn("Your Name"); 
