// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function print3() {
    for (let i = 1; i <= 3; i++) {
      console.log(i);
      await delay(1000);
    }
  }
  print3();
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    });
  }, Promise.resolve());
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ["red", "green", "yellow"];
  const delays = {
    red: 3000,
    green: 5000,
    yellow: 2000,
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function changeLight() {
    while (true) {
      for (const light of lights) {
        console.log(light);
        await delay(delays[light]);
      }
    }
  }

  changeLight();
}

trafficLight();
