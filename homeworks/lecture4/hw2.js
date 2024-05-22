// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

// 2. Given an array of numbers, return an array of numbers that are even.

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

function doubled(arr){
    return arr.map(num => num*2)
}
console.log(doubled([1, 2, 3, 4])); // [2, 4, 6, 8]

function even(arr){
    return arr.filter(num => num % 2 === 0)
}
console.log(even([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

function reverse(str) {
    return str.split('').reduce((accumulator, currentChar) => currentChar + accumulator, '')
}
console.log(reverse("Hello World"));

function flatten(arr) {
    return arr.reduce((accumulator, currentValue) => [...accumulator, ...(Array.isArray(currentValue) ? flatten(currentValue) : [currentValue])] , []);
}
const arr = [[0, 1], [2, 3], [4, 5]];
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flatten(arr));
console.log(flatten(arr2));