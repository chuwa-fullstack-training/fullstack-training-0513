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
// ans: 1 2
// Promise.resolve(1) creates a resolved promise with the value 1.
// The first .then handler receives 1 as the res value and logs it, so 1 is printed.
// The same .then handler returns 2, which is passed to the next .then.
// Since there is no error, the .catch is skipped.
// The second .then handler receives 2 as the res value and logs it, so 2 is printed.

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
// ans: 1 3
// Promise.reject(1) creates a rejected promise with the value 1.
// The first .then handler is skipped because the promise is rejected.
// The .catch handler receives 1 as the err value and logs it, so 1 is printed.
// The same .catch handler returns 3, which is passed to the next .then.
// The second .then handler receives 3 as the res value and logs it, so 3 is printed.

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
// ans: Error: 2
// Promise.all will return the first rejected promise which is error2;