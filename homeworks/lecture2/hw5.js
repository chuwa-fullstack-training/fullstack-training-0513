// Hoisting

// 1.
var x;  //x is initialized with undefined.

if (x !== 3) {  //true
  console.log(y); //undefined. y has not been declared.
  var y = 5;
  if (y === 5) {
    var x = 3;  //var x is in function scope and reassigned to 3.
  }
  console.log(y); //5. 
}
if (x === 3) {  //true
  console.log(y); //5
}


// 2.
var x = 3;
if (x === 3) {  //true
  var x = 2;  // var x is in function scope and reassigned to 2. 
  console.log(x); //2
}
console.log(x); //2

