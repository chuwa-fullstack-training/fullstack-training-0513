// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// output: 7, because var a is a function scope variable.


// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
//output: 5, because var a is a function scope variable.


// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
//output: 3, becasue there is not var/let/const before a, a become a global variable.


// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
//output: 6, a is global variable.


// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
//output: 7, console.log inside function f.


// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
//output: 1, although function a() {} is behide return, there's a hoisting in function b. Make a = 10 only assign 10 to the loval variable a, not the global a.