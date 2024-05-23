// ONLY use map, filter, reduce to solve the following problems:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1. Given an array of numbers, return an array of numbers that are doubled.
console.log(arr.map(num => num * 2));
// 2. Given an array of numbers, return an array of numbers that are even.
console.log(arr.filter(num => num % 2 === 0));
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
const res = str.split('').reduce(
  (acc, char) => char + acc
  , '')
console.log(res);
// // or use map
const res1 = str.split('').map((_, index, arr) => arr[arr.length - 1 - index]).join('');
console.log(res1);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr1 = [[0, 1], [2, 3], [4, 5]];
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];

const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  },[])
}

console.log(flatten(arr1));
console.log(flatten(arr2));
