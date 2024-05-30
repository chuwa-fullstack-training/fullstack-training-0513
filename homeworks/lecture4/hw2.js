// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const newArr = arr.map((item) => item * 2);
// 2. Given an array of numbers, return an array of numbers that are even.
const newArr1 = arr.filter((item) => item % 2 == 0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const newArr2 = string.split("").reduce((pre, cur) => cur + pre, "");
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flatten(val));
    } else {
      return acc.concat(val);
    }
  }, []);
};
