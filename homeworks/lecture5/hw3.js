// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

//a c e d b
//a and c are logged to console synchronously, settimeout schedule callback function console.log("b") 
// to event queue. when the new promise created, e is logged to console synchronously, the promise is resolved with value d
// the last line registered a callback function which will be executed when the promise is resolved.
//The promised is resolved, console.log('d') added to the microtask queue, which has higher priority than event queue
//therefore, after a c e logged to the console, d logged to console first, finally 'b'

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
// 1, start, success
// fn creates a new promise, when new promise is creating, it logs 1 to console synchronously
// promise is resolved with value success, console.log(success) is pushed to the microtask queue
// main stack executed console.log(start)
//after that, main stack is clean, run console.log(success)
