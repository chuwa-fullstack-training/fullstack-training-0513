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

/**
 * output:
 * a
 * c
 * e
 * d
 * b
 * 
 * Explanation:
 * 1. => a
 * 2. put scheduled function into task queue (Task Queue["b"])
 * 3. => c
 * 4. put promise asychronous task into Microtask queue (Microtask Queue["promise(d)"]; Task Queue["b"])
 * 5. => e
 * 5. there is no task in call stack; call microtask and generate new Promise in microtask queue (Task Queue["b"]), 
 * 6. => d
 * 7. there is no task in call stack and microtask queue, call task in task queue => b
 */

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

/**
 * output:
 * 1
 * start
 * success
 * 
 * Explanation:
 * 1. call stack handle promise
 * 2. => 1
 * 3. put promise in microtask queue (Microtask Queue[promise])
 * 4. => start
 * 5. run task in microtask queue, generate new promise, run then, => success
 */
