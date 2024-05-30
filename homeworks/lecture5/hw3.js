// what is the output in order? and explain why?

// 1
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));
//a c d e b
//a, c and d are logged by synchronous code, then d is logged
//by microtask .then, and then b is logged by macrotask settimeout

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");
//1 start  success
//1 and start are logged by synchronous code, then success is logged
//by microtask .then
