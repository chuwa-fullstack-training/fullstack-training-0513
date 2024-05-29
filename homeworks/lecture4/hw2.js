// ONLY use map, filter, reduce to solve the following problems:

arr = [1, 2, 3, 4, 5, 6];
// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubledArr(arr) {
    return arr.map(val => 2*val);
}
console.log(doubledArr(arr));

// 2. Given an array of numbers, return an array of numbers that are even.
function evenArr(arr) {
    return arr.filter(val => val%2 === 0);
}
console.log(evenArr(arr));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseArr(str) {
    return str.split("").reduce((str, curChar) => curChar+str);
}
console.log(reverseArr("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

function flattenArr(arr) {
    return arr.reduce(
        (accumulator, curVal) => {
            curVal = Array.isArray(curVal) ? flattenArr(curVal) : curVal;
            return accumulator.concat(curVal);
        },
        []
    );
}

// test
console.log(flattenArr([[0, 1], [2, 3], [4, [5, 6]]]));