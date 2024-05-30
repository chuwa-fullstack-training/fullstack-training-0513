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
  function reverse(start, end) {
    while (start < end) {
      let temp = str[end];
      str[end] = str[start];
      str[start] = temp;
      start++;
      end--;
    }
  }
  n = str.length;
  reverse(0, n - 1);
  let start = 0;
  for (let i = 0; i <= n; i++) {
    if (str[i] == ' ' || i == n) {
      reverse(start, i - 1);
      start = i + 1;
    }
  }

  let rst = str.join('');
 console.log(rst);
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);