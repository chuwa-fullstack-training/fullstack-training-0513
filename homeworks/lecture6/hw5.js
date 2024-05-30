// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let count = 1;

  function printNumber() {
    console.log(count);
    count++;

    if (count <= 3) {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(printNumber);
    }
  }

  printNumber();
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function printNumber(delay, num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, delay);
    });
  }

  nums.reduce((promise, num) => {
    return promise.then(() => printNumber(1000, num));
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const colors = ['red', 'green', 'yellow'];
  let currentColorIndex = 0;

  function changeLight() {
    return new Promise((resolve) => {
      const currentColor = colors[currentColorIndex];
      console.log(currentColor);
      currentColorIndex = (currentColorIndex + 1) % colors.length;

      setTimeout(resolve, 2000);
    }).then(changeLight);
  }

  changeLight();
}
