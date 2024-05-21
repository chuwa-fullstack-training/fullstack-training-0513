// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.1 + 0.2 == 0.3); // false
/*
Reason: 
Floating point numbers are stored in binary format in memory (IEEE 754-2008 double-precision 64-bit), and 
some decimal numbers cannot be represented exactly in binary. This is why 0.1 + 0.2 is not exactly equal to 0.3.
*/

console.log(1 +  "2" + "2"); // 122
/*
Reason:
The first + operator is followed by a string, so it acts as a concatenation operator, the 1 is converted to a string 
and concatenated with "2" to form "12". The second + operator is also followed by a string, so it acts as a concatenation
*/

console.log(1 +  +"2" + "2"); // 32
/* 
Reason:
The second + operator is the unary plus operator, which converts the string "2" to a number, so 1 + +"2" is 1 + 2 = 3.
The third + operator is followed by a string, so it acts as a concatenation operator, the 3 is converted to a string
and concatenated with "2" to form "32".
*/

console.log(1 +  -"1" + "2"); // 02
/*
Reason:
The - operator is the unary minus operator, which converts the string "1" to a number, so 1 + -"1" is 1 - 1 = 0.
The second + operator is followed by a string, so it acts as a concatenation operator, the 0 is converted to a string
and concatenated with "2" to form "02".
*/

console.log(+"1" +  "1" + "2"); // 112
/*
Reason:
The first + operator is the unary plus operator, which converts the string "1" to a number, so +"1" is 1.
The second + operator is followed by a string, so it acts as a concatenation operator, 1 is converted to a string
and concatenated with "1" to form "11". The third + operator is also followed by a string, so it acts as a concatenation.
*/

console.log( "A" - "B" + "2"); // NaN2
/*
Reason:
The - operator cannot be used with strings, so "A" - "B" results in NaN (Not a Number).
The + operator is followed by a string, so it acts as a concatenation operator, NaN is converted to a string
and concatenated with "2" to form "NaN2".
*/

console.log( "A" - "B" + 2); // NaN
/*
Reason:
The - operator cannot be used with strings, so "A" - "B" results in NaN (Not a Number).
The + operator is used with a number, so NaN + 2 results in NaN.
*/

console.log("0 || 1 = "+(0 || 1)); // 0 || 1 = 1

console.log("1 || 2 = "+(1 || 2)); // 1 || 2 = 1

console.log("0 && 1 = "+(0 && 1)); // 0 && 1 = 0

console.log("1 && 2 = "+(1 && 2)); // 1 && 2 = 2

console.log(false == '0') // true

console.log(false === '0') // false
