// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

let double = (nums) => {
    return nums.map(num => num * 2);
}


// 2. Given an array of numbers, return an array of numbers that are even.

let even = (nums) => {
    return nums.filter(num => num % 2 === 0);
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

let reverse = (str) => {
    return str.reduce((acc, curr, index, array)=> curr + acc, '' ); 
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

let flatten = (arr) => {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flatten(curr));
        } else {
            return acc.concat(curr);
        }
    }, []);
}


