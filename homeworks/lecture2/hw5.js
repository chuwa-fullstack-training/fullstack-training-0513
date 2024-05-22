// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y); // print undefined
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // print 5
}
if (x === 3) {
  console.log(y); // print 5
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);// print 2
}
console.log(x); // print 2

