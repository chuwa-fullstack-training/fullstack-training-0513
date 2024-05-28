/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
    const str = num.toString();
    let [integer, decimal] = str.split('.')

    integer = integer.replace(/(?=(\d{3})+(?!\d))/g, ',');
    return decimal? `${integer}.${decimal}` : integer;

}

console.log(format(12345678));
console.log(format(1234.56));