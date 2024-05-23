// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// ans : 0.30000000000000004
// Due to the way numbers are represented in binary, 0.1 and 0.2 cannot be represented exactly, leading to a small precision error in the result.

console.log(0.1 + 0.2 == 0.3);
// ans : false
// Due to the small precision error, 0.1 + 0.2 is not exactly equal to 0.3.

console.log(1 +  "2" + "2");
// ans : 122
// The + operator with a number and a string performs string concatenation.

console.log(1 +  +"2" + "2");
// ans : 32
// The + before "2" converts it to a number 2. So, the expression becomes 1 + 2 + "2", which is 3 + "2". 

console.log(1 +  -"1" + "2");
// ans : 02
// The - before "1" converts it to a number -1. So, the expression becomes 1 + -1 + "2", which is 0 + "2".

console.log(+"1" +  "1" + "2");
// ans : 112
// The + before "1" converts it to a number 1. So, the expression becomes 1 + "1" + "2", which is "1" + "1" + "2". 

console.log( "A" - "B" + "2");
// ans : NaN2
// The - operator cannot be used with strings. So, it converts "A" and "B" to NaN, and NaN + "2" is "NaN2".

console.log( "A" - "B" + 2);
// ans : NaN
//  The - operator with non-numeric strings ("A" - "B") results in NaN. Then, NaN + 2 is still NaN, because any arithmetic operation with NaN results in NaN.

console.log("0 || 1 = "+(0 || 1));
// ans : 0 || 1 = 1
// The || operator returns the first truthy value, so 0 || 1 returns 1.

console.log("1 || 2 = "+(1 || 2));
// ans : 1 || 2 = 1
// The || operator returns the first truthy value, so 1 || 2 returns 1.

console.log("0 && 1 = "+(0 && 1));
// ans : 0 && 1 = 0
// The && operator returns the first falsy value, so 0 && 1 returns 0.

console.log("1 && 2 = "+(1 && 2));
// ans : 1 && 2 = 2
// The && operator returns the first falsy value or the last value if all are truthy, so 1 && 2 returns 2.

console.log(false == '0')
// ans : true
// When comparing false and '0', '0' is converted to 0, and false is also considered 0, so the comparison false == '0' evaluates to true.

console.log(false === '0')
// ans : false
// The === operator does not perform type coercion, so false and '0' are not considered equal. The comparison false === '0' evaluates to false.