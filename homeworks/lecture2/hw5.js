// Hoisting

// 1. Output: undefined, 5, 5
var x;

if (x !== 3) {
  console.log(y); //undefined; (although there is hoisting for the 'var' type variable in the 
  //function scope, now, it it not being initialized).
  var y = 5;     //Assigned value 5 to y
  if (y === 5) {  //y equal to 5, the condition evalutes to be true, enter the loop
    var x = 3;    //x got the value of 3
  }
  console.log(y); //5; there is no change or re-assignment value inside the 'if' block, y still 5.
}
if (x === 3) {    //As the value of 'x' is 3, condition is true, enter the 'if' block
  console.log(y); // y's vlaue is still 5， y is declared in the 'if' statement but as here y has 
                  // global scope, so the value will still be 5. 
}


// 2. Output: 2, 2
var x = 3;       //global scope and global variable x, assigned with value 3
if (x === 3) {   //'if' is true, enter the 'if' block
  var x = 2;     //re-declared and assigned the value to be 2
  console.log(x); // 2 (for 'var' type variable, x is in the global scope)
}
console.log(x); // 2

