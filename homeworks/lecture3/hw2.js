/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
  // implement here
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 1) {
    const a = arguments[0];
    return function (b) {
      // console.log(arguments[0] === b);
      return a + b;
    };
  } else {
    throw new Error("Invalid input");
  }
}

//test
console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);
