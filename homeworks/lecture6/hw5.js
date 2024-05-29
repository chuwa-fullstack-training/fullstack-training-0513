// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  function delayPrint(number, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(number);
        resolve();
      }, delay);
    });
  }

  delayPrint(1, 1000)
    .then(() => delayPrint(2, 1000))
    .then(() => delayPrint(3, 1000));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  function delayPrint(number, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(number);
        resolve();
      }, delay);
    });
  }

  nums.reduce((promise, num) => {
    return promise.then(() => delayPrint(num, 1000));
  }, Promise.resolve());
}
