// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let i = 1;
  const printNum = () => {
    console.log(i++);
    if (i <= 3) {
      setTimeout(printNum, 1000);
    }
  };
  printNum();
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const colors = ['red', 'green', 'yellow'];
  let i = 0;
  setInterval(() => {
    console.log(colors[i]);
    i = (i + 1) % colors.length;
  }, 1000);
}
