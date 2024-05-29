// 1. use `promise` to print 1, 2, 3 in every 1 second
function print(num) {
  // your code here
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(num);
      resolve();
    }, 1000)
  })
}
// print(1).then(()=>print(2).then(()=>print(3)))

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  return nums.reduce((prev, curr)=>{
    return prev.then(()=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          console.log(curr);
          resolve();
        }, 1000)
      })
      })
  }, Promise.resolve())
}
// printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ['red', 'green', 'yellow'];
  var idx = 0;
  function singlelight(idx){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        console.log(lights[idx]);
        resolve();
      }, 1000*idx)
    })
  };

  function loop(){
    singlelight(idx).then(()=>{
      idx = (idx + 1)%3;
      loop()});
  }
  loop();
}

trafficLight();
