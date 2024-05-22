// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // a number that is slightly different than 0.3, because of floating point precision issue

console.log(0.1 + 0.2 == 0.3); // false, because 0.1 + 0.2 is not exactly 0.3

console.log(1 +  "2" + "2"); // 122. when running 1 + "2", 1 is casted to string, and concatenate to 2.
// Then, "12" is concatenated to "2", result in "122"

console.log(1 +  +"2" + "2"); // 32. In the +"2", the plus sign convert "2" to number, and 1 + +"2" evaluate to 3. 
// Then, 3 is converted to string and concatenated to "2", result in "32" 

console.log(1 +  -"1" + "2"); // 02. Similar to previous one but here 1 + -"1" is 0. 

console.log(+"1" +  "1" + "2"); // 112. +"1" convert string to number 1, then, +"1" +  "1" convert the number
// back to string and concatenated with "1". It then convatenate with "2", result in "112"

console.log( "A" - "B" + "2"); // NaN2. It tried to evaluate "A" - "B" by converting A and B to number
// but this result to NaN because they are not number. NaN-NaN is NaN, then it is converted to string
// and concatenated with "2", result in NaN2

console.log( "A" - "B" + 2); // NaN. It tried to evaluate "A" - "B" by converting A and B to number
// but this result to NaN because they are not number. NaN-NaN is NaN, then NaN + 2 is NaN

console.log("0 || 1 = "+(0 || 1)); // In (0 || 1), 1 is the truthy value, so this evaluate to 1. 
// Then, "0 || 1 = "+1 is converting 1 to string and doing a string concatenation, so result is 0 || 1 = 1

console.log("1 || 2 = "+(1 || 2)); // In (1 || 2), 1 is the first truthy value, so 2 is ignore, means that
// it evaluate to 1. Then, "1 || 2 = "+1 is converting 1 to string and doing a string concatenation,
// so result is 1 || 2 = 1

console.log("0 && 1 = "+(0 && 1)); // In (0 && 1), 0 is the first falsy value, so 0 is the result of (0 && 1)
// Then, "0 && 1 = "+0 evaluate to 0 && 1 = 0

console.log("1 && 2 = "+(1 && 2)); // In (1 && 2), both value is truthy, so pick the last truthy value 2.
// Then, "1 && 2 = "+2 is evaluated to 1 && 2 = 2

console.log(false == '0') // '0' is implicitly casted to false, and compared with false, which is true. 

console.log(false === '0') // === is doing a strict comparison, false and '0' is of different types, so result is false. 
