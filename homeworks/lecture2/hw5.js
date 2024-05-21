// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);   //undefined since the hoisting only do var y but not assign a value yet.
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);   //5, since y is assigned 5
}
if (x === 3) {
  console.log(y);   //5 since x is assigned 3, and y is assigned 5
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);   //2, x is reassigned 2
}
console.log(x);   //2, x is been changed