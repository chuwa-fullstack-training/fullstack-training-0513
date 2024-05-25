// what is the output? and explain why?

// 1
// output: 
// 1
// 2
// The code create a promise that resolve to 1. The first then method take it and print it,
// and it return 2, which is automatically wrapped to a promise that resolve to 2. 
// Then it call catch, but since there's no reject, catch will not be entered. 
// Then in the second then it prints 2. 
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

// // 2
// The code create a promise rejected that has error 1.
// The first then does not enter since it is rejected. 
// The catch is entered, printing the error 1, and return 3, which is wrapped to a resolved promise. 
// The second then print 3. 
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
// output:
// Error: 2
// the runAsync(x) function is returning a promise that will be fulfilled to x after 1000ms, 
// runReject(x) is returning a promise that will be rejected with reason "Error: x" after 1000 * x ms,
// The Promise.all is fulfilled only if all the promises is fulfilled. It is rejected if some of them is rejected 
// and the rejection reason is the reason of the first promise being rejected. 
// Therefore, output is Error: 2
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
