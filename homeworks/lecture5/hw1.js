// what is the output of the following code? and explain why?

// 1
// output: 5 
//5 
//5 
//5 
//5
// the callback function in setTimeout form a closure that can access the variable i. With setTimeout,
// the callback functions are put into callback queue. Since i is declared with var, when the synchronous code finish, i is 5, 
// and the callback function in callback queue begin to go into callstack, and print i, which is 5.
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// output: 0 
//1 
//2 
//3 
//4
// Since i is declared with let, it is block scoped, and the callback function forms a closure that could access i in 
// each iteration. Also, the callback queue is FIFO, so output will be 0 1 2 3 4
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// // output: 0 
//1 
//2 
//3 
//4
// although i is declared with var, the IIFE pass in a parameter called i, and this i masks out the outer i. 
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// output: I am fn
// when the setTimeout is called, the callback function is being passed to browser environment. 
// Then, fn is being changed, but the one passed to browser environment is still there. 
// After 1 second, the original fn is being put to callback queue, and pushed onto callstack. 
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// output: { name: 'another obj' }
// the callback function forms a closure that can access the obj. 
// And the obj is changed before callback function is runned 
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';