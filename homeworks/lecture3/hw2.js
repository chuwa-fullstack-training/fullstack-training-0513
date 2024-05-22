/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */

//1. To make the code sum(2)(3) === 5 work
//Need to create a function that returns another function, the inner function can take the second
//argument and return the sum
//To make the code sum(2, 3) work just create a function with two parameters that expected to 
//pass in like other prgramming languages
function sum(a, b) {
    if (b !== undefined) {
        return a + b;
    } 
    return function(c) {
        return a + c;
    }
}

console.log(sum(2)(3) === 5);
console.log(sum(2,3) === 5);