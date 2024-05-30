/** write a function to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    if (arguments.length === 0) {
        return 0;
    }

    if (arguments.length === 1) {
        let a1 = arguments[0];
        return function (x) {
            return sum(a1, x);
        }
    }

    else
        return arguments[0] + arguments[1];
 
}