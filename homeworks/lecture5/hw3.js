// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
// a c d e b
// execute the code to print a c d and execute the microtask(promise's callback) first and the marcotask(settimeout's callback)

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');

// 1 start success
//fn().then() schedules the execution of the callback function to be executed asynchronously after the promise is resolved.