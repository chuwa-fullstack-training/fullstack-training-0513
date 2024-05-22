// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); //0.30000000000000004. The computer adds 0.1 and 0.2 in binary and then converts the result back to decimal. In the process, a small rounding error may occur.

console.log(0.1 + 0.2 == 0.3); //true

console.log(1 + "2" + "2"); //'122'

console.log(1 + +"2" + "2"); //'32',1+2=3, then 3+'2'='32'

console.log(1 + -"1" + "2"); //'02', 1-1=0, then 0+'2'='02'

console.log(+"1" + "1" + "2"); //'112'

console.log("A" - "B" + "2"); //"NaN2", "A"-"B" = NaN, then NaN +'2'='NaN2'

console.log("A" - "B" + 2); //NaN

console.log("0 || 1 = " + (0 || 1)); //"0 || 1 = 1"

console.log("1 || 2 = " + (1 || 2)); //"1 || 2 = 1"

console.log("0 && 1 = " + (0 && 1)); //"0 && 1 = 0"

console.log("1 && 2 = " + (1 && 2)); //"1 && 2 = 2"

console.log(false == "0"); //true, false->0 and "0"->0, then 0==0

console.log(false === "0"); //false, === will compare both type and value
