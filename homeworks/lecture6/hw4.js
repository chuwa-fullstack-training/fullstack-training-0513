/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let str = String(num);
  const dotIndex = str.indexOf(".");
  let decimal = dotIndex !== -1 ? str.slice(dotIndex) : '';
  str = dotIndex !== -1 ? str.slice(0, dotIndex) : str;

  res = [];
  let i = str.length - 1;
  while (i >= 0) {
    if (i <= 2) {
      res.unshift(str.slice(0, i + 1));
    } else {
      res.unshift(str.slice(i - 2, i + 1));
    }
    i -= 3;
  }
  return res.join(",") + decimal;
}
console.log(format(12345678)); // Output: "12,345,678"
console.log(format(1234.56)); // Output: "1,234.56"
