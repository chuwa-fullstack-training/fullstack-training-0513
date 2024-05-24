// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((x) => x * 2);
console.log(doubledNumbers);

// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
const reversedString = Array.from(str).reduce((acc, val) => val + acc, "");
console.log(reversedString);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const arr1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const arr2 = [
  [0, 1],
  [2, 3],
  [4, [5, 6]],
];

function flattenArray(arr) {
  return arr.reduce(
    (acc, value) =>
      Array.isArray(value)
        ? acc.concat(flattenArray(value))
        : acc.concat(value),
    []
  );
}

const flatArray1 = flattenArray(arr1);
const flatArray2 = flattenArray(arr2);
console.log(flatArray1);
console.log(flatArray2);
