/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  num = "" + num;
  let arr = num.split(".");
  let str = arr[0].split("");
  let cnt = 1;
  for (let i = str.length - 1; i > 0; i--) {
    if (cnt % 3 == 0) {
      str.splice(i, 0, ",");
    }
    cnt++;
  }
  str = str.join("");
  return arr[1] ? str + "." + arr[1] : str;
}
console.log(format(12345678));
console.log(format(1234.56));
