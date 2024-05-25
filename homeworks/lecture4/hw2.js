// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleArray = (array) => {
  return array.map(value => value * 2);
}
console.log(doubleArray([1, 2, 3]));

// 2. Given an array of numbers, return an array of numbers that are even.
const filterArray = (array) => {
  return array.filter(value => value % 2 === 0);
}
console.log(filterArray([1, 2, 3, 4, 5]));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseSting = (s) => {
  return s.split('').reduce((acc, value) => {
    return value + acc;
  },'');
};
console.log(reverseSting("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flatArray = (array) => {
  return array.reduce((accu, value) => {
    return accu.concat(Array.isArray(value) ? flatArray(value) : value);
  },[]);
};

//Test: const arr = [[0, 1], [2, 3], [4, 5]];
const arr = [[0, 1], [2, 3], [4, 5]];
console.log(flatArray(arr)); //Expected Value: [0, 1, 2, 3, 4, 5]

const arr1 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flatArray(arr1)); //Expected Value: [0, 1, 2, 3, 4, 5, 6]
