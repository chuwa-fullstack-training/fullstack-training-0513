// what is the output? and explain why?

// 1
// 1, 2
// resolve will trigger the first .then
// When we return a value inside .then, this value will create a new Promise, and trigger the next .then
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

// 2
// 1, 3
// reject will trigger .catch
// When we return a value inside .catch, this value will create a new Promise, and trigger the next .then
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

//3
// 'Error 2'
// Promise.all will execute multiple tasks in parallel, it triggers .then() when all the tasks are fulfilled.
// It triggers .catch() if any of the promises in the array reject, and provide the reason for the first rejection.
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
