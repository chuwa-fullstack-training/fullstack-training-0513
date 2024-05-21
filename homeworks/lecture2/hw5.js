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

// equivalent to:
/*
var x; // undefined
var y; // undefined
if (x !== 3) {
  console.log(y); // undefined
  y = 5;
  if (y === 5) {
    x = 3;
  }
  console.log(y); // 5
}
if (x === 3) {
  console.log(y); // 5
}
*/

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

// equivalent to:
/*
var x;
x = 3;
if (x === 3) {
  x = 2;
  console.log(x); // 2
}
console.log(x); // 2
*/
