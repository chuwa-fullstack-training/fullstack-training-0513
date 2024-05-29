// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  //your code here
  Promise.resolve()
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
  });
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      if (num !== undefined) {
        console.log(num);
      }
      return new Promise((resolve) => setTimeout(resolve, 1000));//works
    });
  }, Promise.resolve());
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const delay = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  function displayLight(color, time) {
    return delay(time).then(() => {
      console.log(color);
    });
  }

  displayLight('red', 500)
  .then(() => {
    return displayLight('green', 5000);
  })
  .then(() => {
    return displayLight('yellow', 4000);
  })
  .then(() => {
    trafficLight();
  });
}

trafficLight();

