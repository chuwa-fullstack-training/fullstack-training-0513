// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * output:
 * 5
 * 5
 * 5
 * 5
 * 5
 * 
 * Explanation:
 * 1. for each iteration, setTimeout() trigger an asynchronous task and put it in the task queue;
 * 2. after all iteration, the call stack is empty, the task in the task queue get executed;
 * 3. beacause of the scope of var is function scope, so the value of 'i' is not captured for each iteration. All scheduled functions share the same i variable, which will have the value 5 after the loop finishes.
 */

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * output:
 * 0
 * 1
 * 2
 * 3
 * 4
 * 
 * Explanation:
 * This code is similar to the code above. The difference here is that the i was declared as 'let' which is block-scoped.
 * Each iteration will have its own value of 'i'.
 */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/**
 * output:
 * 0
 * 1
 * 2
 * 3
 * 4
 * 
 * Explanation:
 * The IIFE creates a scope for each iteration, capturing the value of 'i' in every iteration.
 */

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/**
 * Output:
 * I am fn
 * 
 * Explanation:
 * The asynchronous function is called and capture the reference of fn, and is put in the task queue;
 * When this function is executed, although the fn outside has been redirected to a new function, in the asynchrous function, the reference is still the original one.
 */

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/**
 * Output:
 * { name: 'another obj' }
 * 
 * Explanation:
 * The asynchronous function is called and capture the reference of obj, and is put in the task queue;
 * When this function is executed, the obj.name has been changed to "another obj", so the output is { name: 'another obj' }
 */