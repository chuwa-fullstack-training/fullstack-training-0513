// what is the output? and explain why?

// 1
/**
 * 1 2;
 * A resolved promise is created with value 1.
 * The first then handler is executed and 1 logs.
 * .then() would always return a new promise, if a new promise is not explicitly decalred, the return value is automatically wrapped in a resolved promise.
 * Therefore, a promise is created with value 2 and pass to the next .then() handler.
 * The third .then() handler logs 2
 *
 */
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// 2
/**
 * 1 3;
 * A rejected promise is created with the value 1.
 * Since the resolution of the promise is rejected, the first .then() handler is skipped.
 * The next .catch() handler is executed and 1 logged.
 * A resolved promise with value 3 is passed to the next .then() handler.
 * The last .then() handler is executed and 3 logged.
 */
Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

//3
/**
 * Error: 2
 * function runAsync and runReject are defined.
 * Promise.all() returns a resolved promise if all of the promises are resolved.
 * If any of the promise is rejected, a rejected promised will be returned immediately.
 * The four function calls return a promise that resolved / rejected after a specific ms
 * runAsync(1) and runAsync(3) will first return resolved promise.
 * Then runReject(2) will return a reject promise with Error: 2.
 * Since one of the promises is rejceted,
 * Promise.all() immediately rejects with the same reason ("Error: 2").
 */
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
