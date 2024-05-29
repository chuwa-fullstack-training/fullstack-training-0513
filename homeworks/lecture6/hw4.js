/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let [integer, decimal]  = num.toString().split(".");
  let count = 0;
  let result = '';
  for (let i = integer.length - 1; i >= 0; i--){
    result = integer[i] + result;
    count ++;
    if (count === 3 && i != 0){
      result =  ',' + result;
      count = 0;
    }
  }

  if (decimal){
    result = result + "." + decimal;
  }
  return result
}

console.log(format(1234.56))