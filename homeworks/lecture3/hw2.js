/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
        let num1 = arguments[0];
        return function(num2) {
            return num1 + num2;
        }
    } else {
        return "invalid input";
    }
}