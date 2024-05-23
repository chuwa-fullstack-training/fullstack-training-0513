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
// a c e d b
// the promise callbacks are microtasks, so they are executed before the setTimeout function (macrotask)
// the code will output a c first, 
// then the promise is executed, e is logged, then d is logged
// then the setTimeout function is executed, b is logged

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
// the promise is executed synchronously, so when the promise is called, 1 is logged
// but the then function is executed asynchronously (added to the microtask queue), so start is logged first, then success is logged