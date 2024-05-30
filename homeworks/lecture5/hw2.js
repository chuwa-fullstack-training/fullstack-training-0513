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
  reverseAll(str, 0, str.length-1);
  let start = 0;
  for (let end = 0; end <= str.length; end++) {
    if (end == str.length || str[end] === " " ) {
      reverseAll(str, start, end);
      start = end + 1;
    }
  }

  return str.join("");
}

function reverseAll(str, start, end) {
  while (start < end) {
    [str[start], str[end]] = [str[end], str[start]];
    start++;
    end--;
  }
  return;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));
