// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}

// undefined
// 5
// 5
// hoisting make the declaration of y available in the whole block, but the assignment is not hoisted, so the first console.log(y) prints undefined
// y is 5
// x is 3, console.log(y) prints 5

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// 2
// 2
// var x = 2 is hoisted, and it changes the value of x to 2