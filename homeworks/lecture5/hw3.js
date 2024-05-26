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

//Output: a,c,e,d,b
//Explain: The first statement 'a' will printed then c as they are synchronous operation. The 
//call back function for console.log('b') will be put into macro task queue and wait for the 
//current call stack and microstack queue is cleared. For the 'promise' part, resolve('d') is 
//called but not execute immediately but put on the microtask queue, e is the synchrouns operation
//and will be printed immediately. Then after the synchronous code execution done, the event
//loop process the microtask queue and resolve('d') the 'then' callback of the resolved promise
//is executed and printing 'd', 'f' won't be printed as the promise is resolved instead of 
//rejected. Finally, the event loop will process the macrotask queue and executes the 'setTimeout'
//callback, printing 'b'.

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

//Output: 1 start success
//Explain: The fn() is first called and it creates and executes the 'Promise'. Inside the 
//constructor, 1 is printed and the resolve('success') is called and the 'then' method is
//attached to the promise returned by fn(), the callback will be added to the microtask queue
//Then the code move to the next synchronous code and print start. Aftter all synchronous 
//code is executed, the event loop start process the microtask queue and the callback from the
//'.then' method is executed and output 'success'.
