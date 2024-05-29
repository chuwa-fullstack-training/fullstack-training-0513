// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5. var i is function scoped, so all the value of i is 5 when setTimeout is called

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4. let i is block scoped, so the value of i is different for each iteration

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4. 
// The IIFE creates a new scope for each iteration, so the value of i is different for each iteration

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn. after 1 second
// the function passed to setTimeout by copy of the reference, so the setTimeout prints the first value of fn.
// when reassigning fn, it doesn't affect the function passed to setTimeout, since it point fn to a new reference.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// { name: 'another obj' }
// the object passed to setTimeout by reference, so it prints the latest value of obj