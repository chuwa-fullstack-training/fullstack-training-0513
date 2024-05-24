// what is the output in order? and explain why?

// 1
// a, c, e, d, b
// First, we need to execute all the synchronous tasks, so we get 'a, c';
// console.log('e') is also a synchronous task, and when the state of the promise changes, subsequent code can still be executed. So next we get 'e';
// Both Promise and setTimeout are asynchronous tasks. Promise is handled by the JS engine, while setTimeout is handled by the browser,
// so Promise has a higher priority than setTimeout.
// 'resolve('d')' will trigger '.then', so next we get 'd';
// The state of a promise can only change once, so reject('f') will be ignored.
// The last task is setTimeout, we get 'b'
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2
// 1, start, success
// Both 'console.log(1)' and 'console.log('start')' are synchronous tasks
// 'resolve('success')' will change the promise's status after the asynchronous task has finished.
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
