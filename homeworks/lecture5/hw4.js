// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });
// 1 2
// for promise, resolve and .then are executed synchronously, so 1 is returned and logged in the first .then
// the catch is skipped because there is no error
// then the value of 2 is returned and logged in the second .then

// // 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });
// 1 3
// the promise is rejected with the value of 1, so the catch is executed, 1 is logged
// then 3 is returned and logged in the second .then

//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));
// Error: 2
// the Promise.all will wait for all promises to be resolved or one of them is rejected
// the first and third promises are resolved with the value of 1 and 3 at the 1 second mark
// then the last promise is rejected with the value of 2, so the catch is executed and the error is logged, 
// the rest of the promises are short-circuited
