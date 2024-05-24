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
/*
Output:
undefined: var y is hoisted to the top of current scope and it is declared but not initialized so the value is undefined
5: var y is assigned to 5
5: var y is function scoped but it's declared outside function so it's considered global scoped. Therefore, 5 is logged.
*/

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

/*
Output:
2: var x is re-declared as a global variable in the if statement so x is logged as 2
2: The variable x in the first line is overwritten as 2 when it is re-declared
*/
