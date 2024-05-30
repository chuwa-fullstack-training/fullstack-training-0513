// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  var p = Promise.resolve();
  for (let i = 1; i <= 3; i++) {
    p = p.then(() => printWithDelay(i));
  }
}

function printWithDelay(i) {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        console.log(i);
        resolve();
      },
      1000,
      i
    );
  });
}

print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  return nums.reduce((p, num) => {
    return p.then(() => printWithDelay(num));
  }, Promise.resolve());
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  // your code here
  const lights = ["red", "green", "yellow"];
  let index = 0;
  while (true) {
    await asyncOperation(lights[index]);
    index = (index + 1) % lights.length;
  }
}
function asyncOperation(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 1000);
  });
}
trafficLight();
