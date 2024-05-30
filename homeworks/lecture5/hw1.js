// what is the output of the following code? and explain why?

// 1
/**
 * 5 5 5 5 5;
 * Since setTimeout is a Web Api, its callback is scheduled to be executed after 1000ms.
 * After 1000ms, the callback will be added to the event queue.
 * Once the call stack is expty, the callback will then move to the call stack and execute.
 *
 * Since var i is not declared in a function, it is considered globally-scoped.
 * When the for loop ends, i will become 5 and the callstack will be empty.
 * Then, each callback will be moved to the call stack and get the same reference of i, which is 5.
 */
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
/**
 * 0 1 2 3 4;
 * The only difference here is the variable declaration.
 * Since let i is block-scoped, each iteration has its own instance i (0, 1, 2, 3, 4).
 * A closure is created when each iteration ends and it will preserve the current i.
 * Therefore when each callback is executed, they will log their own respective value of i.
 */
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
/**
 * 0 1 2 3 4;
 * In this case, each iteration invokes an IIFE with the respective value of i.
 * Also, each iife will create a closure, capturing the current i.
 * Each setTimeout will also create a closure for the innner callback and the closure will preserve the parameter i.
 * When each callback is executed, they will log their own respective value of i.
 */
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
/**
 * I am fn;
 * The original fn passed to setTimeout still preserve the reference to the original fn,
 * even though fn is reassigned later.
 * Therefore, setTimeout will execute the original fn.
 */
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};

// 5
/**
 * { name: 'another obj' }
 * The inner arrow function create a closure, which will track the function itself and the lexcial enviornemt.
 * Therefore, obj will capture the latest obj.
 */
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';