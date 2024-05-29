// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  const printNum = (num) => new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000);
  });
  printNum(1)
    .then(() => printNum(2))
    .then(() => printNum(3));
}

// test
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  const printNum = (num) => new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000);
  });
  nums.reduce((acc, cur) => {
    return acc.then(() => printNum(cur));
  }, Promise.resolve());
}
// test
// printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ['red', 'green', 'yellow'];
  let index = 0;
  const printLight = () => {
    process.stdout.write(lights[index] + ' ');
    setTimeout(() => {
      process.stdout.write('-> ');
    }, 500);
    index = (index + 1) % lights.length;
  };
  setInterval(printLight, 2000);
}
// test
trafficLight();
