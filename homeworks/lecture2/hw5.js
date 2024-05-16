// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);  // undefined; "y" is hoisted; The code should be: var y; console.log(y); y = 5;
  var y = 5;  // y is global scope
  if (y === 5) {
    var x = 3;  // no block scope, x is global scope, will overwrite the previous "var x";
  }
  console.log(y);  // 5
}
if (x === 3) {
  console.log(y);  // 5
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;  // no block scope, x is global scope, will overwrite the previous "var x = 3";
  console.log(x);  // 2
}
console.log(x);  // 2

