/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  const numStr = num.toString();
  const [integer, deciaml] = numStr.split('.');
  
  if (integer.length <= 3){
    return num
  }

  let reversedInts = integer.split('').reverse().join('');
  let splitInts = reversedInts.match(/[\s\S]{1,3}/g);
  splitInts = splitInts.map(splitInt => splitInt.split('').reverse().join('')).reverse();
  let result = splitInts.join(',');

  return decimal ? `${result}.${deciaml}` : result;
}
 