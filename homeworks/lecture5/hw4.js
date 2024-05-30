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
  /**
   * Output:
   * 1
   * 2
   * 
   * Explanation:
   * promise.resolve, get into the first then, => 1
   * get into the second then, => 2
   */

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
  /**
   * Output:
   * 1
   * 3
   * 
   * Explanation:
   * promise.reject, get into the catch => 1
   * get into the second then, => 3
   */

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

  /**
   * Output:
   * Error: 2
   * 
   * Explanation:
   * 1. TaskQueue [(resolve(1), 1000), (reject(Error 4), 4000), (resolve(3), 1000), (reject(Error 2), 2000)]
   * 2. after 1000, run resolve(1) -> resolve(3). TaskQueue [(reject(Error 4), 4000), (reject(Error 2), 2000)]
   * 3. after 2000, run reject(Error 2), trigger Promise error throw task. MicrotaskQueue [promise.catch(Error 2)]; TaskQueue [(reject(Error 4), 4000)]
   * 4. console.log(Error: 2)
   */