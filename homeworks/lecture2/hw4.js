// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// ans : 7

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// ans : 5
// The variable a is declared inside the if block, but it is accessible outside the block due to var hoisting.

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// ans : 3
// The variable a is assigned the value 3 inside the function f, which is accessible globally.

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
// ans : 6
// The function first changes the global variable a to 6, which is then logged by the function second.

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// ans : 7
// The variable a inside the function f shadows the global variable a, so the value 7 is logged.

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// ans : 1
// The function a inside the function b is hoisted to the top of the function, this create a local variable a that shadows the global variable a. after this "a = 10", The global variable a remains unchanged.