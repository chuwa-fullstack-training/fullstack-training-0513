// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
//7
//a is in function scope



// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
//5
//var is in function scope
//the expression is the same as
// function f() {
//   var a;
//   if (true) {
//     a = 5;
//   }
//   console.log(a);
// }
//so the output is 5


// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
//3
//In function f(), it does not declare the type of a. So a is automatically created as as a global variable in the global scope.
//the expression is the same as
//a = undefined;
// function f() {
//   a = 3;
// }
// f();
// console.log(a);
//so the output is 3


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
//6
//Because the function first() is called firstly, the variable a, in the global scope, is reassigned from value 5 to value 6.
//Then second() is called and print a, whose value is 6.

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
//7
//Firstly, variable a is declared in the global scope.
//Then in function f(), a new variable a is declared and initialized with the value 7, which is in the function scope.
//For console.log(a); is inside f(), it prints variable a in the function scope.
//So the output is 7.

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
//1
//Firstly, variable a is declared in the global scope with initial value 1.
//While function b() is called, function a() {} is hoisted to the top of function b().So a is reassigned to a function in function b scope.
//Then in function b(), a = 10 changes a from a function to a number 10, in the function scope.
//function b() returns undefined. 
//The statement console.log(a); is in the global scope so it prints variable a in the global scope.
//So the output is 1.