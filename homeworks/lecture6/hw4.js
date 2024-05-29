/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  let nstr = num.toString();
  let dotpos = nstr.indexOf(".");
  if (dotpos === -1) {
    dotpos = nstr.length;
  }
  let rarr = [];
  let i = nstr.length - 1;
  for (; i > dotpos; --i) {
    rarr.push(nstr[i]);
  }
  if (nstr[i] === ".") {
    rarr.push(".");
    --i;
  }
  let c = 0;
  for (; i >= 0; --i) {
    if (c === 3) {
      c = 0;
      rarr.push(",");
    }
    ++c;
    rarr.push(nstr[i]);
  }
  return rarr.reverse().join("");
}

console.log(format(12345678));
console.log(format(1234.56));