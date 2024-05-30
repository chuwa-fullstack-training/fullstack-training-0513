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

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const lights = ['red', 'green', 'yellow'];
  const delays = {
    red: 1000,
    green: 1000,
    yellow: 1000,
  };

  function delayLight(color) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(color);
        resolve();
      }, delays[color]);
    });
  }

  async function cycleLights() {
    while (true) {
      for (const light of lights) {
        await delayLight(light);
      }
    }
  }

  cycleLights();
}