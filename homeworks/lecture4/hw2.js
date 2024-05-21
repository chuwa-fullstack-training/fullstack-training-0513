// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubleArray(arr) {
  return arr.map(val => val * 2);
}

// 2. Given an array of numbers, return an array of numbers that are even.
function evenArray(arr) {
  return arr.filter(val => val % 2 === 0);
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseStr(str) {
  const arr = str.split('');
  return arr.reduce(((acc, val) => val + acc), '');
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
  return arr.reduce((res, val) => {
    if (val instanceof Array) {
      res.push(...flattenArray(val));
    } else {
      res.push(val);
    }
    return res;
  }, [])
}
