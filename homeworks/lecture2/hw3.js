// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// Floating point arithmetic in JavaScript is not perfectly accurate due to the binary floating-point format.


console.log(0.1 + 0.2 == 0.3);
// false
// Due to the imprecision of floating-point arithmetic, 0.1 + 0.2 does not exactly equal 0.3.

console.log(1 +  "2" + "2");
// 122
// JavaScript performs type coercion, converting the number 1 to a string and concatenating it with the other strings.

console.log(1 +  +"2" + "2");
// 32
// The unary plus converts the string 2 to a number before addition, then the result is concatenated with the string 2.

console.log(1 +  -"1" + "2");
// 02
// The unary minus converts 1 to -1, which is then added to 1 resulting in 0, and finally, 2 is concatenated.


console.log(+"1" +  "1" + "2");
// 112
// The unary plus converts 1 to the number 1, which is then concatenated with the strings 1 and 2.


console.log( "A" - "B" + "2");
// NaN2
// Subtracting two non-numeric strings results in NaN, which is then concatenated with 2.

console.log( "A" - "B" + 2);
// NaN
// Subtracting non-numeric strings results in NaN, and adding 2 still results in NaN.

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// The logical OR  returns the first truthy value; since 0 is falsy, it returns 1.

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// The logical OR returns the first truthy value, which in this case is 1.

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// The logical AND returns the first falsy value, which is 0.

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// The logical AND returns the second value if the first is truthy, which here is 2.

console.log(false == '0')
// true
// Loose equality performs type coercion, and false is considered equivalent to the string 0

console.log(false === '0')
// false
// Strict equality does not perform type coercion, so a Boolean and a string are not considered equal.
