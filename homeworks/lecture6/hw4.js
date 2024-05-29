/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let t = num % 1 === 0;
  let s = num.toString();
  let res = '', c = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    res = s[i] + res;
    if (s[i] === '.') {
      t = true;
      continue;
    }
    if (!t) continue;
    c++;
    if (c === 3 && i !== 0) {
      res = ',' + res;
      c = 0;
    }
  }
  return res;
}

console.log(format(12345678))
console.log(format(1234.5678))
console.log(format(123456.56))
