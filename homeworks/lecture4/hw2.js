// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function double (arr) {
    return arr.map((v) => { return 2 * v; } );
}
// 2. Given an array of numbers, return an array of numbers that are even.

function geteven (arr) {
    return arr.filter((v) => { return v % 2 === 0; });
}
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverse(str) {
    let arr = str.split("");
    let res = arr.reduce((prev, curr) => {
        prev.unshift(curr);
        return prev;
    }, []);
    return res.join("");
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

function flatten(arr) {
    return arr.reduce((prev, curr) => {
        if (typeof curr === "object") {
            let flat = flatten(curr);
            // console.log("element : " + flat);
            prev = prev.concat(flat);
            // console.log(prev);
        } else {
            prev.push(curr);
        }
        return prev;
    }, []);
}

console.log(double([1, 2, 3]));
console.log(geteven([1, 2, 3, 4]));
console.log(reverse("cjwoo")); 
console.log(flatten([[0, 1], [2, [3, [4, 5]], 3], [4, [5, 6]]]));