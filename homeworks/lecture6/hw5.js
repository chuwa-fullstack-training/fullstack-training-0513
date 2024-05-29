// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function printNum(num) {
    return new Promise(resolve => {
      return setTimeout(() => {
        console.log(num);
        resolve(num + 1);
      }, 1000);
    })
  }

  printNum(1).then(res => {
    return printNum(res);
  })
    .then(res => {
      return printNum(res);
    })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function printNum(num) {
    return new Promise(resolve => {
      return setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000)
    })
  }

  nums.reduce((promise, num) => {
    return promise.then(() => printNum(num))
  }, Promise.resolve())
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = [
    { lightColor: "red", delayTime: 2 },
    { lightColor: "green", delayTime: 3 },
    { lightColor: "yellow", delayTime: 1 },
  ]

  function showLight(light) {
    return new Promise(resolve => {
      console.log(light.lightColor);
      return setTimeout(() => {
        resolve();
      }, light.delayTime * 1000)
    })
  }

  (function cycle() {
    lights.reduce((promise, light) => {
      return promise.then(() => showLight(light));
    }, Promise.resolve()).then(cycle)
  })()
}

// test 
// print();
// printList();
trafficLight();
