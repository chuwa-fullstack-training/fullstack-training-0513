/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numStr = num.toString();

  let parts = numStr.split('.');

  let integerPart = parts[0];
  let formattedIntegerPart = '';
  let count = 0;
  for (let i = integerPart.length - 1; i >= 0; i--) {
    formattedIntegerPart = integerPart[i] + formattedIntegerPart;
    count++;
    if (count % 3 === 0 && i !== 0) {
      formattedIntegerPart = ',' + formattedIntegerPart;
    }
  }

  return formattedIntegerPart + (parts[1] ? '.' + parts[1] : '');
}

console.log(format(12345678))
console.log(format(1234.5678))
console.log(format(123456.56))