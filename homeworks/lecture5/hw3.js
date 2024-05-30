// what is the output in order? and explain why?

// 1
/**
 * a c e d b;
 * a is logged.
 * setTimeout() scheduled is callback to event queue after 0ms.
 * c is logged.
 * Then, a new promise is created and its executer function is immediately executed (sync).
 * resolve('d') is called and scheduled a microtask to handle the resolution of the promise.
 * e is logged because is part of the executer function.
 * Although reject('f') is called, it wouldn't be scheduled since the promise is resolved.
 * Now, the call stack is empty, the microtasks are proccessed. The promise's then handler logs d.
 * Finally, macrotasks are processed, so the setTimeout callback logs b.
 */
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));

// 2
/**
 * 1 start success;
 * fn is defined.
 * fn is called and a new promise is created and its executer function is excuted immediately.
 * 1 is logged first and resolve('success') scheduled a microtask to handle the resolution of the promise.
 * start is logged.
 * Now, the call stack is empty so the then handler is executed, success logs.
 */
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");