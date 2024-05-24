// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
/*
Output: 0.30000000000000004
Explanation: floating point numbers in JS are represented in binary. While doing arithemathic operation, the result may not be precise.
*/

console.log(0.1 + 0.2 == 0.3);
/*
Output: false
Explanation: 0.1 + 0.2 is 0.30000000000000004
*/

console.log(1 + "2" + "2");
/*
Output: 122
Explanation: If one of the operand is string, the other will be converted to string and do string concatenation
*/

console.log(1 + +"2" + "2");
/*
Output: 32 
Explanation: Unary operators will first convert its operand to number so the expression will become 1 + 2 = 3
*/

console.log(1 + -"1" + "2");
/*
Output: 02 
Explanation: Unary operators will first convert its operand to number so the expression will become 1 + -1 = 0
*/

console.log(+"1" + "1" + "2");
/*
Output: 112
Explanation: Unary operators will first convert its operand to number so the expression will become 1 + "1" = "11"
*/

console.log("A" - "B" + "2");
/*
Output: NaN2
Explanation: Subtraction operator only works for number and BigInt. The expression first converts two operand to numberic value.
"A" and "B" are not a number so the result is NaN. Then NaN is converted to string and concated with "2"
*/

console.log("A" - "B" + 2);
/*
Output: NaN2
Explanation: NaN + 2 is not a number
*/

console.log("0 || 1 = " + (0 || 1));
/*
Output: 0 || 1 = 1
Explanation: The expression returns 1 because 0 is falsy value
*/

console.log("1 || 2 = " + (1 || 2));
/*
Output: 1 || 2 = 1
Explanation: The expression returns 1 because 1 is truthy value
*/

console.log("0 && 1 = " + (0 && 1));
/*
Output: 0 && 1 = 0
Explanation: The expression returns 0 because 0 is the first falsy value
*/

console.log("1 && 2 = " + (1 && 2));
/*
Output: 0 && 1 = 2
Explanation: The expression returns 2 because the && operator will return the last truthy value if all operands are truthy value
*/

console.log(false == "0");
/*
Output: true
Explanation: false and "0" are both converted to 0 so they are equal
*/

console.log(false === "0");
/*
Output: true
Explanation: false and "0" are different types so strict equality operator consider them different
*/
