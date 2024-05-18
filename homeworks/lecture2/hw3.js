// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004
//Because JavaScript uses the IEEE-754 floating-point representation, which is a binary representation and cannot exactly represent some decimal numbers, leading to rounding errors.

console.log(0.1 + 0.2 == 0.3);
//false
//Because as shown in the previous problem, the result of 0.1 + 0.2 = 0.30000000000000004, not 0.3 due to the rounding errors in the binary representation of floating-point numbers.

console.log(1 +  "2" + "2");
//122
//Coercion happens when 1+"2". 1 is coerced into a string "1". "1"+"2"+"2"="122"

console.log(1 +  +"2" + "2");
//32
//The second + is unary plus operator,which is evaluated first and which can convert its operand to a number. 
//So  +"2"=2.
//Then it will calculate 1+2+"2"=3+"2"="32"

console.log(1 +  -"1" + "2");
//02
//The - is unary negation operator,which is evaluated first and which can convert its operand to a number.
//So -"1"=-1
//1+(-1)=0
//0+"2"="02"

console.log(+"1" +  "1" + "2");
//112
//+"1" is evaluated first.
//+"1"=1
//1+"1"="11"
//"11"+"2"="112"

console.log( "A" - "B" + "2");
//NaN2
//The - operator coerces both operands to numeric values.
//"A"-"B"=NaN-NaN=NaN
//NaN+"2"=NaN2

console.log( "A" - "B" + 2);
//NaN
//The - operator coerces both operands to numeric values.
//"A"-"B"=NaN-NaN=NaN
//NaN+2=NaN

console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1
//(0 || 1) is evaluated first. (0 || 1)=1
//Then it calculates "0 || 1 = "+1
//The + operator coerces both operands to string values.
//"0 || 1 = "+1 is coerced to  "0 || 1 = "+"1"
//The Answer is a string, 0 || 1 = 1

console.log("1 || 2 = "+(1 || 2));
//1 || 2 = 1
//(1 || 2) is evaluated first. (1 || 2) = 1
//Then it calculates  "1 || 2 = "+1
//= "1 || 2 = "+"1"
//= "1 || 2 = 1" 

console.log("0 && 1 = "+(0 && 1));
//0 && 1 = 0
//(0 && 1) is evaluated first. (0 && 1) = 0
//Then it calculates "0 && 1 = "+0
//="0 && 1 = "+"0"
//="0 && 1 = 0"

console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2
//(1 && 2) is evaluated first. (1 && 2) = 2
//Then it calculates "1 && 2 = "+2
//="1 && 2 = "+"2"
//="1 && 2 = 2"

console.log(false == '0')
//true
//First, == first checks if the operands have the same type. Because false and  '0' have different types, JavaScript will coerce the operands to a common type.
//false is coerced to a number 0
//'0' is coerced to a number 0
//0==0, which is true

console.log(false === '0')
//false
//The triple equal operator compares the types and values of the operands.
//false and '0' have different type, so the result is false.