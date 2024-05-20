// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); 
//1. Ans: 0.30000000000000004
//This due to the precision issues when representing numbers as float number in javascript

console.log(0.1 + 0.2 == 0.3);
//2. Ans: False
//The similar reason as '1', as the 0.1 + 0.2 is not strictly equal to 0.3 due to the precision 
//problem

console.log(1 +  "2" + "2");
//3. Ans: "122"
//When the first operator is of 'number' type, the javascript will convert it to the string "12" 
//when adding string "2", similarly, the later "2" will also be concatenated to "122" string. 

console.log(1 +  +"2" + "2");
//4. Ans: "32"
//The term '+"2"' will convert it to number 2 and the expression becomes: 1 + 2 + "2" which 
//becomes 3 + "2". Similar reason to the problem "3", it will then become: "32" string.

console.log(1 +  -"1" + "2");
//5. Ans: "02"
//Similar to problem "4", -"1" convert the string into number -1 and the expression becomes:
//1 + (-1) + "2" and becomes 0 + "2" and to string "02".

console.log(+"1" +  "1" + "2");
//6. Ans: "112"
//"+1" convert the string "1" into number 1 and the expression becomes: 1 + "1" + "2" and this 
//further evaluates to be: "112"

console.log( "A" - "B" + "2");
//7. Ans: "NaN2"
//We cannot take 'subtract' operation on string "A" and string "B" hence the result would be:
//NaN and after after adding string "2", as NaN is also a type of number, it will be convert to
//string when put it as: NaN + "2" and the result would be the corresponding string concatenation:
//"NaN2"

console.log( "A" - "B" + 2);
//8. Ans: NaN
//For the first step: "A" - "B". Similarly, we cannot make the subtract operation between two 
//string and the result would be a number type NaN and we we do the 'add' operation between
//NaN and a number 2, the result would still be NaN.

console.log("0 || 1 = "+(0 || 1));
//9. Ans: "0 || 1 = 1"
//This is just a console log and 0||1 will be printed as expected, regarding for the logical 
//expression 0 || 1, as we know 0 evaluate to be false and 1 evaluate to be true 
//so the result of 0 || 1 is 1 

console.log("1 || 2 = "+(1 || 2));
//10. Ans: "1 || 2 = 1"
//Similar to problem "9", for the expression " 1 || 2", as '1' is a true value, it will return
//true directly without evaluate the later part '2'.

console.log("0 && 1 = "+(0 && 1));
//11. Ans: "0 && 1 = 0"
//In Js, for the logical operator "&&", it requires two operands both be true value but we know
//the first operand "0" evaluates to false, so we know the result would be: 0 && 1 = 0

console.log("1 && 2 = "+(1 && 2));
//12. Ans: "1 && 2 = 2"
//In JS, the expression of 1 && 2 will return 2, as the '&&' operator need two of the operand to 
//be true and as the final evaluted operand term is '2', so we return 2 in js.

console.log(false == '0')
//13. Ans: true
//In JS, the "==" operand will conduct type conversion, 'false' will be convert to '0' and 
//we know '0' is also '0', so the result evaluated to be true

console.log(false === '0')
//14. Ans: false
//The '===' is for strict comparison and JS won't conduct type conversion for us, the expression
//need both the type and value to be the same to evaluate to be true. We know that 'false' is a
//boolean type and '0' is string type, the type is different, hence return 'false'.
