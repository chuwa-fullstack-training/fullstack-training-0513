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
//a c e d b, becasue it will do the main process first, so a and c first then e
// then mircotasks -> when promise fullfilled -> d
// then marcotasks -> setTimeout -> b


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
// 1 start success
// when fn is called, 1
// put resolve('success') to mircotasks
// start
// then the call stack is empty, do mircotasks -> success