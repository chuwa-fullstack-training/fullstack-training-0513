// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 55555 The var keyword declares a variable with global scope. By the time the setTimeout callbacks execute, the loop has completed and i is 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//01234 Each iteration of the loop has its own scope, so each setTimeout callback closes over a different i.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//01234 IIFE is used to create a new scope for each iteration of the loop. The i passed as an argument to the IIFE is captured by the setTimeout callback.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//I am another fn
// By the time setTimeout executes, fn has been reassigned to a new function.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }
//  By the time the setTimeout executes, the name property of obj has been changed to 'another obj', so the updated object is logged.