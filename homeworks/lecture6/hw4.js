/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const numStr = num.toString();
  const [integer, decimal] = numStr.split('.');
  const res = Array.from(integer).reverse().reduce((acc, cur, index) => {
    if (index % 3 === 0 && index !== 0) {
      return cur + ',' + acc;
    }
    return cur + acc;
  }, '');
  return decimal ? res + '.' + decimal : res;
}
console.log(format(12345678)); // 12,345,678
