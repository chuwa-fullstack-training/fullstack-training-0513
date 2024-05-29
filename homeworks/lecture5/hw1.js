// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//5 5 5 5 5, because the i is var. var is function scope, and after 1000ms, i is 5.


// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//0 1 2 3 4, let is block scope.


// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//0 1 2 3 4, IIFE will create new scope for each iteration


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//I am fn, although after 1000ms, fn is reassigned to another function, the reference held by setTimeout is to the original function.



// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//{name: 'another obj'}, becasue after 1000ms, obj.name is reassigned to another name