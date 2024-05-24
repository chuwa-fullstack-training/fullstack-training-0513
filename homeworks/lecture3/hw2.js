/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...args) {
  // implement here
  if (args.length === 1) {
    return function (b) {
      return args[0] + b;
    };
  } else {
    return args[0] + args[1];
  }
}
// use currying
console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)