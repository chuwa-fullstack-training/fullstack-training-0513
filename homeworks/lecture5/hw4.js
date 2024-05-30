// what is the output? and explain why?

// 1
Promise.resolve(1) //pass 1 to the next .then
  .then((res) => {
    console.log(res);
    return 2; //pass 2 to the next .then
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  }); //1 2

// 2
Promise.reject(1) //pass 1 to the .catch
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3; //pass 3 to the next .then
  })
  .then((res) => {
    console.log(res);
  }); //1 3

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

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//Error: 2
//if the four promises in the array are all fulfilled,
//the Promise will become fulfilled, but if one of the four promises
//becomes rejected, the first rejected one will be passed to the .catch
