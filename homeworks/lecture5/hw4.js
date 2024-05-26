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
//Output: 1 2

//Explain: The code first creates a resolved promise with value '1'. The 'then' method is called
//with a callback to print this result value 1, so '1' is printed. The callback itself returns 
//value 2. The code will omit the '.catch' method as there is no error and move on to the next
//'.then()' function in the promise chain and as the promise is resolved with 2 now, the 
//second 'then()' function called its own callback function and printed result '2'.



// // // 2
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
//Output: 1 3

//Explain: Here the 'Promise.reject(1)' created a rejected promise with the value '1' as the 
//promise is rejected, the first '.then' method won't executed and the '.catch' method is called
//as the promise is rejected and it's callback function will output the error value '1'. The callback
//itself return 3, which creates a new resolved promise with value '3'. The second 'then' method
// is called and take this value and use its callback to printout the value '3'.

// //3
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

//Output: Error: 2

//Explain: The code have 'runAsync(1)' and 'runAsync(3)' that create a promise resolves with '1' 
//after 1 second and '3' after 1 second respectively. Also, there are 'runReject(4)' and 
//'runReject(2)' that create a promise that rejects with 'Error: 4' or 'Error: 2' after 4 or 2 
//seconds respectively. 'Promise.all' take the array of promise and will rejects when any one 
//of the input promises rejects, in our case, the 'Promise.all' will reject as soon as 'runReject(2)'
//reaches its rejected states after 2 seconds. and the '.catch' will call its call back and printed
//out Error: 2, the program won't wait for 'runReject(4)' in this case.
