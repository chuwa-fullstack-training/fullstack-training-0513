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
  str.unshift(" ");
  res = [];
  let i,j = str.length - 1;
  while (j >= 0) {
    if (str[j] !== " ") {
      i = j - 1;
      while (str[i] != " ") {
        i -= 1;
      }
      res.push(str.slice(i + 1, j + 1).join(""));
      j = i - 1;
    } else {
      j -= 1;
    }
  }
  return res.join(" ");
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));