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
//outputs:
//a
//c
//e
//d
//b
//explanation:
//'a' and 'c' are logged synchronously. setTimeout callback is added to tasks. Promise's state is set to fulfilled with value 'd', and the callback is added to microtasks. Promise's constructor is executed synchronously, printing 'e'. Then microtasks are executed, printing 'd'. Then tasks are executed, printing 'b'.

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
//outputs:
//1
//start
//success
//explanation:
//It prints '1','start' synchronously. Promise's state was set to fulfilled and callback is added to microtasks, which is executed after main stack. When executing microtasks, it prints 'success'.