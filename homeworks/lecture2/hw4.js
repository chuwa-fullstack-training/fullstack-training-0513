// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// output is 7
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output?
// It is 5. In the var a = 5, declaration of it is hoisted to top of function and 
// value is set to undefined. Then it goes into the branch, setting "a" to be 5. 
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// It's 3. The a = 3 implicitly create a global variable and set it to 3, so the console.log(a) can access the global variable. 
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// The output will be 6. var a = 5 is used outside functions, so it is declaring and defining a global variable. 
// The first function change the value of the global variable. 
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
// If f is called, output is 7. The var a = 5 define a global variable a.
// Inside the function, the var a = 7 override the one defined outside, but it only onverride
// in the scope of the function. 
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6. 
// output is 1. Inside the function b, the function a is hoisted to the top of the scope of function b. 
// Then, a = 10 is setting the local variable, which is the function a, to 10. 
// the global variable a is not affected.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
