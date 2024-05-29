// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// ans: 5 5 5 5 5
// var declaration of i was shared across all iterations.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// ans: 0 1 2 3 4 
// let creates new scope for i in each iterations

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// ans: 0 1 2 3 4
// Each setTimeout callback captures a separate i value due to the closure created by the IIFE.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// ans: I am fn
// binding to the ininital function 

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// ans: another obj
// execute the current state of obj