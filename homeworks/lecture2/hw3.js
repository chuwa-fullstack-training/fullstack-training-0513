// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.300...004
//It's the rounding error. Float number like 0.1 and 0.2 can't be represented in binary format precisely.

console.log(0.1 + 0.2 == 0.3);
//false
//It's the rounding error. 0.1 + 0.2 != 0.30...04, so return false

console.log(1 +  "2" + "2");
//"122"
// javascripy will convert number 1 to string 1, so that it can calculate 1 +  "2" + "2".

console.log(1 +  +"2" + "2");
//"32"
//+"2" will convert into number 2, 1 + 2 = 3, then 3 + "2" convert 3 to string, then add them together.

console.log(1 +  -"1" + "2");
//"02"
//-"1" will convert string 1 to number -1, 1 + (-1) = 0, them 0 + "2" convert number 0 to string 0. Do addtion.

console.log(+"1" +  "1" + "2");
//"112"
//+"1" convert to number, 1 + "1" convert to string then add, get "11" + "2", 

console.log( "A" - "B" + "2");
//NaN2
// -"B" convert to number, NaN. "A" - NaN get NaN. NaN convert to string "NaN" then add "2"

console.log( "A" - "B" + 2);
//NaN
// -"B" convert to number, NaN. "A" - NaN get NaN. NaN add 2 still NaN

console.log("0 || 1 = "+(0 || 1));
//"0 || 1 = 1"
// True or False get True -> 1, so "0 || 1 = "+ 1 convert 1 to string then add

console.log("1 || 2 = "+(1 || 2));
//"1 || 2 = 1"
// True or True get True -> or get the first true 1, so "1 || 2 = " + 1 convert 1 to string then add

console.log("0 && 1 = "+(0 && 1));
//"0 && 1 = 0"
// False and True get False -> 0, so "0 && 1 = " + 0 convert 0 to string then add

console.log("1 && 2 = "+(1 && 2));
//"1 && 2 = 2"
// True and True get True -> and get the second true 2, so "1 && 2 = " + 2 convert 2 to string then add

console.log(false == '0')
//true
// == double compairsion only compare value, both false so return true

console.log(false === '0')
//false
// === triple compairsion not only compare value but also compoare type. In the equation, left side is boolean while right side is string. return false