// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//output:
// 5
// 5
// 5
// 5
// 5
//explanation: 
//var i has functional scope. Each iteration shares the same i. By the end of the loop, i becomes 5. After the main stack is empty, the functions in event stack are being executed by order, and all the callbacks share the same reference to i, which is 5 now. So it prints '5' five times.


// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//output:
// 0
// 1
// 2
// 3
// 4
//explanation:
//let i has block scope. Each iteration has its own i. The callbacks in iterations are added into event stack after 1 second and then they are executed by order, prints each i.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//output:
// 0
// 1
// 2
// 3
// 4
//explanation:
//var i has functional scope in the IIFE. So each iteration has its own i. The callbacks in iterations are added into event stack after 1 second and then they are executed by order, prints each i.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//outputs:
//I am another fn
//explanation:
// By the end of main stack, fn is reassigned to the function that prints 'I am another fn'. Then after 1 second, the callback in event stack is executed and prints 'I am another fn'.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//outputs:
//{ name: 'another obj' }
//explanation:
// By the end of main stack, obj.name is reassigned to 'another obj'.Then after 1 second, the callback in event stack is executed and prints the obj with key name, value 'another obj'.
