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
//outputs:
//1
//2
//explanation:
//The promise's state is set to fulfilled with value 1, which means res is 1. The first then expression is added to microtasks and it send res with value 2 to next then. Because the promise is fulfilled, the catch expression will not be triggered. The second then expression is added to microtasks. The main stack ends and then microtasks are executed,printing '1' and '2' by sequence.

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
//outputs:
//1
//3
//explanation:
//The promise's state is set to rejected with value 1. The first 'then' expression will not executed because of the promise is rejected. Catch expression is executed and prints '1', then it sends 3 to next 'then'. The second 'then' prints '3'.

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
//outputs:
//Error: 2
//explanation:
//In the Promise.all() function, all promises in the array must settle (either fulfill or reject) for the then block to execute. In this case, runReject(4) and runReject(2) both reject, so the catch block is triggered with the first rejection encountered. Since runReject(2) rejects earlier than runReject(4), it prints 'Error: 2'.