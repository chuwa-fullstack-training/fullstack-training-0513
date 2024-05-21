// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
f();
// 7
/*
Reason:
The variable is declared with the var keyword, so it has function scope. The declaration is hoisted to the top of the
Function. Inside if statement, the value of a is reassigned to 7, so when the function is executed, the value of a 
will be 7.
*/

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// 5
/*
Reason:
The variable a is function scoped, so it is hoisted to the top of the function.
Inside the if statement, the value of a is assigned to 5, so the value of a will be 5.
*/

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// 3
/*
Reason:
The variable a is not declared with the var, let, or const keyword, so it is implicitly declared as a global variable.
Inside the function f, the value of a is assigned to 3, so a will be 3.
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
// 6
/*
Reason:
a is a global variable, first() changed its value to 6, so when second() is called, it will be 6.
*/

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
};
// 7
/*
Reason:
a was declared agian as a local variable inside f(), so the value of a will be 7 as assigned inside the function. 
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
// 1
/*
Reason:
The above code is equivalent to:
var a;
a = 1;
function b() {
  var a; // function a() 
  a = 10;
  return;
  function a() {}
}
So inside the function b, the a assigned is the local variable a for the function, not the global variable a.
*/
