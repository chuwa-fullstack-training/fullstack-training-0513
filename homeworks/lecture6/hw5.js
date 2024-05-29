// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  let p1 = new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  p1.then((res) => {
    console.log(1);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }).then((res) => {
    console.log(2);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }).then((res) => {
    console.log(3);
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  nums.reduce((prev, curr) => {
    return prev.then((res) => {
      console.log(curr);
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    });
  }, Promise.resolve(0));
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  let state = 0;

  function changeLight() {
    if (state === 0) {
      console.log("red");
    } else if (state === 1) {
      console.log("green");
    } else {
      console.log("yellow");
    }
    state = (state + 1) % 3;
    setTimeout(changeLight, 1000);
  }

  changeLight();
}

trafficLight()