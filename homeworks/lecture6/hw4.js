/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let str = num.toString();
  let [int, dec] = str.split('.');
  let res = '';
  let len = int.length;
  for (let i = 0; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      res = ',' + res;
    }
    res = int[len - 1 - i] + res;
  }
  return dec ? res + '.' + dec : res;
}
