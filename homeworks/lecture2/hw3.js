// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// >> 0.30000000000000004
// explanation: In JavaScript, numbers are stored as floating-point numbers using the IEEE 754 standard. This standard represents numbers in binary, which can lead to precision errors when dealing with decimal fractions.

console.log(0.1 + 0.2 == 0.3);
// >> false;
// explanation: In JavaScript, numbers are stored as floating-point numbers using the IEEE 754 standard. This standard represents numbers in binary, which can lead to precision errors when dealing with decimal fractions.

console.log(1 +  "2" + "2");
// >> 122
// explanation: implicit conversion; The Number 1 will be coerced to a String and concanated to the later String.

console.log(1 +  +"2" + "2");
// >> 32
// explanation: The second plus sign convert string "2" into a number, then 1 + 2 = 3, and then Number 3 is converted to String because the ele behind the plus sign is a String 2;

console.log(1 +  -"1" + "2");
// >> 02
// explanation: The second plus sign convert string "1" into a number, then 1 - 1 = 0, and then Number 3 is converted to String because the ele behind the plus sign is a String 2;

console.log(+"1" +  "1" + "2");
// >> 112
// explanation: +"1" convert the first String 1 into number 1, then it meet another String one, so, the first one is converted to a string one again and then is concated with the second string 1.

console.log( "A" - "B" + "2");
// >> NaN2
// explanation: subtract will first convert operands into Number, but A and B are non Number, which will be converted into NaN in Number, so the result is NaN2

console.log( "A" - "B" + 2);
// >> NaN
// explanation: subtract will first convert operands into Number, but A and B are non Number, which will be converted into NaN in Number, then, plus 2, the result will be NaN;

console.log("0 || 1 = "+(0 || 1));
// >> 0 || 1 = 1
// explanation: because the left operand is 0, which is falsy, so for || operator, it will evaluate 1, and return 1

console.log("1 || 2 = "+(1 || 2));
// >> 1 || 2 = 1
// explanation: because the left operand is 1, which is truthy, so for || operator, it will not evaluate 2, and return 1

console.log("0 && 1 = "+(0 && 1));
// >> 0 && 1 = 0
// explanation: because the left operand is 0, which is falsy, so for && operator, it will not evaluate 1, and return 0

console.log("1 && 2 = "+(1 && 2));
// >> 1 && 2 = 2
// explanation: explanation: because the left operand is 1, which is truthy, so for && operator, it will evaluate 2, and return 2

console.log(false == '0')
// >> true
// explanation: The double equal operator will first perform coercion, then compare the value of operands.

console.log(false === '0')
// >> false
// explanation: for strict equal operator, it not only compares the value of the operands, but also compares the type of the operands.
