// what is the output? and explain why?

// 1
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
// 1 2
//Promise.resolve(1)返回一个成功的Promise对象，然后执行第一个then，输出1，返回2，然后执行第二个then，输出2

// // 2
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
// 1 3
//Promise.reject(1)返回一个失败的Promise对象，然后执行catch，输出1，返回3，然后执行第二个then，输出3

//3
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

Promise.all([runAsync(1), runAsync(4), runAsync(3), runAsync(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Error: 2
// Promise.all接收一个promise数组，当所有promise都成功时，返回所有成功解决值数组，当有一个promise失败时，返回第一个失败的promise
