// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleNumbers = (numbers) => {return numbers.map(num => num * 2);};
console.log(doubleNumbers([1, 2, 3, 4, 5]));

// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = (numbers) => {return numbers.filter(num => num % 2 === 0);};
console.log(evenNumbers([1, 2, 3, 4, 5]));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseString = (str) => {
  return str.split('').reduce(
    (acc, curr) => curr + acc, ""
  );
};
console.log(reverseString("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const flattenArray = (arr) => {
  return arr.reduce(
    (acc, curr) => {
      if(Array.isArray(curr)){
        return acc.concat(flattenArray(curr));
      }
      else{
        return acc.concat(curr);
      }
    }, 
  []);
};
console.log(flattenArray([[0, 1], [2, 3], [4, [5, 6]]]));