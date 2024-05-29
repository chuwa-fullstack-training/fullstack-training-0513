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




function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}


function filterEvens(arr) {
    return arr.filter(num => num % 2 === 0);
}


function reverseString(s) {
    return s.split('').reduce((rev, char) => char + rev, '');
}


function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}


console.log(doubleNumbers([1, 2, 3, 4]));  
console.log(filterEvens([1, 2, 3, 4, 5, 6]));  
console.log(reverseString("Hello World"));  
console.log(flattenArray([[0, 1], [2, 3], [4, 5]])); 
console.log(flattenArray([[0, 1], [2, 3], [4, [5, 6]]]));  
