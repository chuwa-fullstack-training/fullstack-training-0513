// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubleNumbers(arr) {
    return arr.map(n => n * 2);
}

// 2. Given an array of numbers, return an array of numbers that are even.
function evenNumbers(arr) {
    return arr.filter(n => n % 2 === 0);
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH" only use map, filter, reduce
function reverseString(s) {
    return s.split('').reduce((acc, cur) => cur + acc, '');
}
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattenArray(arr) {
    return arr.reduce((acc, cur) => acc.concat(cur), []);
}