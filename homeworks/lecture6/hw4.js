/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
/*
From right to left and only 
*/
function format(num) {
  // your code here
  let numStr = num.toString();
  let [integerPart, decimalPart] = numStr.split('.');
  let reverseProcessPart = integerPart.split('').reverse().join('');
  let result = [];
  for (let i = 0; i < reverseProcessPart.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result.push(',');
    }
    result.push(reverseProcessPart[i]);
  }
  let resultIntegerPart = result.reverse().join('');
  if (decimalPart) {
    return resultIntegerPart + '.' + decimalPart;
  } else {
    return resultIntegerPart;
  }
}
console.log(format(12345678)); //Expected Output: 12,345,678
console.log(format(1234.56)); //Expected Output: 1,234.56