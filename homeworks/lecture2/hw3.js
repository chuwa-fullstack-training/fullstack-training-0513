// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// JavaScript uses floating-point arithmetic for calculations which can lead to precision errors.

console.log(0.1 + 0.2 == 0.3);
// false
// JavaScript uses floating-point arithmetic for calculations which can lead to precision errors.

console.log(1 +  "2" + "2");
// "122"
// The number 1 is coerced to a string and concatenated with the other two strings

console.log(1 +  +"2" + "2");
// "32"
// The unary plus (+) converts "2" to the number 2, then 1 + 2 equals 3, and this number is then converted to a string and concatenated with the final "2".

console.log(1 +  -"1" + "2");
// "02"
// The unary minus (-) converts "1" to the number -1, then 1 + -1 equals 0, and this number is then converted to a string and concatenated with "2".

console.log(+"1" +  "1" + "2");
// "112"
// The unary plus converts the first "1" to the number 1, which is then automatically converted back to a string when concatenated with the subsequent "1" and "2" strings.

console.log( "A" - "B" + "2");
// "NaN2"
// Since "A" and "B" cannot be converted to numbers, their subtraction results in NaN (Not-a-Number), which is then converted to a string and concatenated with "2".

console.log( "A" - "B" + 2);
// NaN
// Adding 2 to NaN still results in NaN.

console.log("0 || 1 = "+(0 || 1));
// "0 || 1 = 1"
// The logical OR returns the first truthy value

console.log("1 || 2 = "+(1 || 2));
// "1 || 2 = 1"
// The logical OR returns the first truthy value

console.log("0 && 1 = "+(0 && 1));
//"0 && 1 = 0"
// The logical AND returns the first falsy value it encounters

console.log("1 && 2 = "+(1 && 2));
//"1 && 2 = 2"
// The logical AND returns the second operand if the first is truthy

console.log(false == '0')
// true
// Loose equality converts '0' to false

console.log(false === '0')
// false
// Strict equality (===) checks both value and type