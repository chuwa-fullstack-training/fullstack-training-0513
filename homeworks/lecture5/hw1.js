// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//5 5 5 5
// Because the variable declared by the var keyword is function-scoped, the value of i at the end of the loop is 5. All of the setTimeout callbacks refer to the same i, and they are executed at the end of the loop.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// Variables declared with the let keyword are block-scoped, and each iteration creates a new binding for i, so each setTimeout callback function gets the value of i for that iteration in the loop.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// Each loop creates a new scope, ensuring that the i in each setTimeout callback function is the value of i in that iteration

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
// setTimeout calls the original version of the fn function. When setTimeout is called, fn points to the first function, and the output is I am fn

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }
// Objects are passed by reference, so the function in setTimeout references the latest value of obj and outputs the modified object.