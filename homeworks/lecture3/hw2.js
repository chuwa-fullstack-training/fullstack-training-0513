/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    let args = Object.values(arguments);
    // or
    // let args = Array.from(arguments);

    if (args.length === 1) {
        return function (b) {
            return args[0] + b;
        }
    } else if (args.length === 2) {
        return args[0] + args[1];
    } else {
        console.log('invalid arguments');
        return null;
    }
}
console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)