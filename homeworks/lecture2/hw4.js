// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
//Ans: 7
//In this function('a' is in the function scope), the var 'a' is initialized with value 10, 
//as 10 is greater > 5, so in the 'if' block, the value of a is reassigned to be 7.

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
//Ans: 5
//In JS, the scope of the 'var' variable is of the function scope, as the true is a certain 
//statement, the var type 'a' declared and initialized in the 'if' block is actually has the
//scope of the whole function, so it can be visited even outside of the 'if' bloke scope.

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
//Ans: 3
//In JS, if the variable is not declared using either 'var', 'let' or 'const' it is implicitly
//declared as a global variable and when 'f' is calling, the variable 'a' is assigned with
//a value 3 and later be printed in the global scope. 

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
//Ans: 6
// In this question, a is a global vaiable and initialized with 5. When calling the function
//'first', the value of the variable 'a' is reassigned to be '6'. Then, after calling the function
// 'second' the value of the global variable a is printed with the value '6'. 

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
//Ans: 7
//In function f(), the global variable 'a' is redeclared and assigned with valeu '7', this is 
//a new local variable and overide the value of the global variable 'a'. 

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

//Ans: 1
// In function b, a is masked as a local variable due to the function declaration function a() {}
// (the function a declaration will also hoisted inside the function(b))
// As a result, the assignement operation for a inside of the function b won't affect the global
// variable and when we finally printing the a in the global variable, the value will still be 1.