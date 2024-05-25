/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function rev(str, f, til) {
  --til;
  while (f < til) {
    let temp = str[f];
    str[f++] = str[til];
    str[til--] = temp;
  }
}
function reverseWords(str) {
  let last = 0;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === " ") {
      rev(str, last, i);
      last = i + 1;
    }
  }
  rev(str, last, str.length);
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(""));
