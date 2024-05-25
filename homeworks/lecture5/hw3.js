// what is the output in order? and explain why?

// 1
// output:
// a 
// c 
// e 
// d 
// b
// firstly a is logged, then the settimeout is called with timeout = 0, which means immediately put callback
// function to callback queue. Then, c is logged, then a Promise is created, and executor function is runned. 
// since the resolve is async code, it will be put into microtask queue, and then e is printed, and reject()
// is ignored because resolve() is called once. Then, JS engine pop out microtask queue and run it, print d, then
// pop callback queue and run it, print b.
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2
// output: 
// 1
// start
// success
// when fn() called, a promise is created, its executor function is runned immediately, printing 1. 
// resolve() is async so it is not runned now. 
// Then, the then() hang on the resolver function.
// and then the program prints "start"
// Then, microtask queue begin to pop, logging the "success"
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
