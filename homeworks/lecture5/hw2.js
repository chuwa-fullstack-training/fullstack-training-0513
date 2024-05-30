/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  str = str.join("").split(" ");
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    [str[l], str[r]] = [str[r], str[l]];
    l++;
    r--;
  }
  return str.join(" ");
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
const res = reverseWords(input);
console.log(res);
