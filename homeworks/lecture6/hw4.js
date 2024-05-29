/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numStr = num.toString();
  let r = numStr.length;
  let l = numStr.length - 3;

  let idxOfDot = numStr.indexOf(".")
  if (idxOfDot > 0) {
    l = idxOfDot - 3;
  }

  let res = [];
  while (l >= 0) {
    res.unshift(numStr.slice(l, r));
    r = l;
    l -= 3;
  }
  if (r !== 0) {
    res.unshift(numStr.slice(0, r))
  }

  return res.join(',');
}

console.log(format(12345678));
console.log(format(1234.56));
console.log(format(0.12)); 