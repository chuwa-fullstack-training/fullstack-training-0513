// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  new Promise(resolve => setTimeout(resolve, 1000))
    .then(() => {
      console.log(1);
      return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(2);
      return new Promise(resolve => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(3);
    })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return new Promise(resolve => setTimeout(resolve, 1000));
    })
  }, Promise.resolve()).then(r => console.log('Finish'));
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const light = ['red', 'green', 'yellow'];

  function printColors(i) {
    console.log(light[i % 3]);
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      printColors(i + 1);
    });
  }

  printColors(0);
}
trafficLight();
