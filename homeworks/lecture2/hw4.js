// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

/*
Output: 7
Explanation: var a is function scoped. it can be accessed within the function
*/

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
/*
Output: 5
Explanation: var a is lifted to the top of the function so it is accessible in the entire function
*/

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
/*
Output: 3
Explanation: a is declared as a global variable so it is accessible anywhere
*/

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

/*
Output: 6
Explanation: a is declared as a global variable so it is accessible anywhere
*/

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
/*
Output: 7
Explanation: the second a is declared as a local variable so when logging a, js will first search for local varable a
*/

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

/*
Output: 1
Explanation: In function b, function a is hoisted to the top and decalred as a function inside current function scope.
Variable a is function scoped so even a is reassigned to 10, it wouldn't affect the global variable a.
*/
