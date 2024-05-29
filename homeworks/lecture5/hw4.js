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
// // 1 2
// The promise starts parsing at 1, so the first .then is triggered, logging 1 and returning 2.
// Since there are no errors, the .catch is skipped.
// The second .then receives 2 from the previous .then.


// 2
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
// The promise starts the rejection at 1, so the first .then is skipped.
// The .catch catches the rejection, logs 1, and returns 3.
// The next .then receives 3 from the .catch.


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
//   Promise.all requires all promises in the array to be resolved. If any promise is rejected, Promise.all rejects, stating the reason for the first rejected promise.
// Here, runReject(2) is rejected first, so Promise.all rejects it with Error: 2. Once the first rejection occurs, the results or rejections of the other promises are ignored.