// what is the output of the following code? and explain why?

// 1
// 5,5,5,5,5;
// There is no block scope when using 'var', 'i' is a global variable, so 1 second later, the value of i is 5.
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// 0,1,2,3,4;
// When using 'let', there is block scope, so each time through the loop, the value of i is different.
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// 0,1,2,3,4;
// Although 'i' is a global variable, the IIFE function will create a function scope for each 'i'.
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// 'I am fn';
// At first, fn stores a reference to an arrow function, which prints 'I am fn'.
// When we pass fn to setTimeout, we pass the copy of the fn reference to setTimeout. Inside setTimeout, fn is a new reference to the first arrow function.
// Then we reassign fn and point it to another function. This does not affect the function reference already passed to setTimeout.
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// {name: 'another obj'}
// 'setTimeout' is an asynchronous task; we need to execute all the synchronous tasks first, then execute 'setTimeout'
// 'obj' is a global variable. When we execute '() => console.log(obj)' one second later, the value of obj.name has already changed to 'another obj'.
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
