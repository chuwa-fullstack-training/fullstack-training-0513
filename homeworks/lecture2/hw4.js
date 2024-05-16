// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// 7; "a" is in the function scope
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output?
// 5; when use var, don't need to consider the block scope, so "a" is in the function scope
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// 3; "a" is declared without using "var", "let" or "const" keyword, so it would be a global variable
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// 6; "a" is in global scope. It can be accessed anywhere in the file
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5.
// 7. We have one variable "a" in global scope, we also have one variable "a" in function scope.
// Within the function, when we try to access a variable, js will first search within the current scope, and find the "a = 7"
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6.
// 1; Inside the function b, we access the function "a" before we declare it, so the function "a" declarations are hoisted
// So the variable "a" inside function b is not the same with the global variable "a",
// Inside function b, the variable 'a' is in the function scope. It is declared as a function first, and then its value is changed to 10.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
