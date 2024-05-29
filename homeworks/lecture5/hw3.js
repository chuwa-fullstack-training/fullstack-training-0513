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

//  acedb
// a and c are printed immediately because they are regular synchronized console logs.
// e' is printed immediately after because it is also a synchronized operation in the Promise constructor.
// d is printed immediately afterward, because it is parsed in the Promise, and is printed as soon as the current script and processing microtasks are completed.
// But b comes last, because setTimeout is a task that will be executed after all immediate code and microtasks.



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
// //1 start d success b
// 1 is printed immediately from within the promise in fn().
// start is printed immediately after, because it is the synchronized console log after the promise is set.
// success is printed last, because it is the result of a resolved promise, and the promise processes its resolution as a microtask, which runs after the current script ends and before the next task begins.