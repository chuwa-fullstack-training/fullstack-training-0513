/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    const args = Array.from(arguments);
    if (args.length === 2){
        return args[0] + args[1];
    }
    const a = args[0]; //return a curried function
    return function(b) {
        return a + b;
    };
}
