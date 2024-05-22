// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// floating-point numbers are represented in binary format. The result of 0.1 + 0.2 cannot be represented precisely in binary, causing the rounding error.

console.log(0.1 + 0.2 == 0.3);
// false 
// The result of 0.1 + 0.2 is not 0.3

console.log(1 +  "2" + "2");
// "122"
// The expression is evaluated as a string concatenation

console.log(1 +  +"2" + "2");
// "32"
// +"2" is a unary plus operator, which converts string "2" to number 2. 1 + 2 = 3, and 3 + "2" -> "32".

console.log(1 +  -"1" + "2");
// "02"
// -"1" is a unary minus operator, which converts string "1" to number -1. 1 + -1 = 0, and 0 + "2" -> "02".

console.log(+"1" +  "1" + "2");
// "112"
// +"1" converts string "1" to number 1. Then 1 + "1" -> "11", and "11" + "2" -> "112".

console.log( "A" - "B" + "2");
// "NaN2"
//  "A" - "B" -> NaN, since it attempts to subtract two non-numeric strings, then NaN + "2" -> "NaN2".

console.log( "A" - "B" + 2);
// NaN
//  "A" - "B" -> NaN, NaN plus any number is NaN.

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// 0 is false, so || return 1

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// 1 is true, || return the first true operand

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// 0 is false, so && return 0

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// && returns the first operand if it's false, otherwise it returns the second operand

console.log(false == '0')
// true
//non-strict equality comparison,  false is converted to 0, and '0' is 0, so they are equal

console.log(false === '0')
// false
//strict equality comparison, false is a boolean, and '0' is a string, so they are not equal
