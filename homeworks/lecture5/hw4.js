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
// since there's no error, it will first Promise.resolve(1) and console.log(1)
//then res is 2 and console.log(2)


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
//1 3
//becasue there is rejected, the res is 1 it will go to .catch and log err -> 1
//then res is 3 and it will go to the last .then -> 3


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
//Error: 2
//runAsync(1) -> 1 after 1000ms, runReject(4) -> Error: 4 after 4000ms, runAsync(3) -> 3 after 1000ms, and runReject(2) -> Error: 2 after 2000ms
//Promise.all will wait for all promises settled. If there is some promises rejected, Promise.all will rejects with the reason of the first promise that rejects.
