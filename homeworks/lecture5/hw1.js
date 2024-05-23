// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5
// because var is function scoped, so the value of i is 5 when the setTimeout functions are executed

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// because let is block scoped, so the value of i is the value of i in each iteration

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// because the value of i is passed as an argument to the IIFE, so the inside i is actually a new variable which has a
// scope only inside the IIFE. The value of i is different in each iteration

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
// When the setTimeout function is called, it will access the value of the variable fn at that time, which is the first fn
// but if we access an variable inside the fn, when the fn is called by setTimeout, it will access the value of the variable on that time

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }
// the object is passed by reference, so the setTimeout function will access the object when it is called
