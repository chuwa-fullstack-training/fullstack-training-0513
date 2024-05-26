// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output: 5 5 5 5 5
//Reason: The var type 'i' is function-scoped which means the variable is shared across
//all iterations of the loop and all reference to the same variable, the 'for' loop will
//finished within one second and the value of i will already be 5 that time, the 'setTimeout'
//function schedules the callback to run after 1 second and as each of the 'setTimeout' callback
//share the same value of 'i', so each will print '5'.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output: 0 1 2 3 4
//Explain: This time the change from 1 to 2 is to change the variable 'i' to be declared with
//'let' keyword. The 'let' keyword varaible is block-scoped and each iteration of the loop 
//gets its own variable 'i' due to blocking scoping, so it will iterate from 0 to 4.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//Output: 0 1 2 3 4
//Explain: The above code utilized IIFE and in each iteration of the loop, an IIFE is invoked
//with the current value of 'i'. We now for IIFE, a new scope is created for each invocation with
//the current value of 'i'. The callbacks will log the value of 'i' for each iteration in the 'for'
//loop with 0 1 2 3 4

 //4
let fn = () => {
  console.log('I am fn');
};
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
};
//Output: I am fn
//Explain: In this case we pass the fn itself into the 'setTimeOut' function and it will
//capture the value that the 'fn' is setted regardless of what the function is after 
//reassignment, it will only remeber the intiial reference regardless of the new function.
//(In js, redeclartion the function will create a new reference )

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

//Output: {name: 'another obj'}
//Explain The 'setTimeout' function here captures a reference to the 'obj' variable with its
//reference instead a snapshot of value. Since 'obj' was modified outside in the main thread
//before the callback executed, the logged value is the most recent name of the obj. 
