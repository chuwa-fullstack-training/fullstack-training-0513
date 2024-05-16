// What would be the output of following code?
// Explain your answer.

// 0.30000000000000004; There are precision issues when representing numbers with floating point numbers.
console.log(0.1 + 0.2);

// false; 0.1 + 0.2 > 0.3 due to the "floating point precision" problem.
console.log(0.1 + 0.2 == 0.3);

// "122"; When use a number plus a string, js will convert the number to string.
console.log(1 +  "2" + "2");

// "32"; 1 + (+"2") + "2"
// First step: +"2" convert "2" to number 2,
// Then we get 1 + 2 + "2" = 3 + "2"
console.log(1 +  +"2" + "2");

// "02"; 1 + (-"1") + "2"
// First step: -"1" convert "1" to number -1,
// Then we get 1 - 1 + "2" = 0 + "2"
console.log(1 +  -"1" + "2");

// "112"
// First step: +"1" convert "1" to number 1,
// Then we get 1 + "1" + "2"
console.log(+"1" +  "1" + "2");

// "NaN2";
// When using subtraction in js, js will convert the string to number, if a string can not convert to a valid number, it will return NaN
// SO, "A" - "B" = NaN - NaN = NaN
// Then we get NaN + "2", since the type of NaN is Number, it will be converted to string "NaN" here.
// Thus, the final result is "NaN" + "2" = "NaN2"
console.log( "A" - "B" + "2");

// NaN;
// "A" - "B" + 2 = NaN + 2. In js, any math operation involving NaN will return NaN
console.log( "A" - "B" + 2);

// "0 || 1 = 1";
// In js, operator || will return the first truthy value form left to right
// In 0 || 1, the first value 0 is a falsy value, so we check next value 1, 1 is a truthy value, so return 1.
console.log("0 || 1 = "+(0 || 1));

// "1 || 2 = 1";
// In 1 || 2, the first value 1 is a truthy value, so return 1.
console.log("1 || 2 = "+(1 || 2));

// "0 && 1 = 0";
// In js, operator && will return the first falsy value from left to right, if all values are truthy, it returns the last one.
// In (0 && 1), the first value 0 is a falsy value, so return 0;
console.log("0 && 1 = "+(0 && 1));

// "1 && 2 = 2";
// In (1 && 2), the first value 1 is a truthy value, so we check next value 2, 2 is a truthy value, and it's the last value, so return 2.
console.log("1 && 2 = "+(1 && 2));

// true;
// When we use "==" to compare two values, if the values have different data types, js will convert them to the same type.
console.log(false == '0')

// false;
// When we use "===" to compare two values, js will check the data type first, if the data type is different, it will return false
console.log(false === '0')
