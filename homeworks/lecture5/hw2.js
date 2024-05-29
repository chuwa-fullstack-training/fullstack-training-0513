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
  str = str.reverse();
  function reverse(start, end, s) {
    while (start < end){
      [s[start], s[end]] = [s[end], s[start]];
      start++;
      end--;
    };
  };
  let start = 0;
  let end = 0;
  while (end < str.length + 1){
    if (end < str.length && str[end] != " "){
      end++;
    }
    else{
      reverse(start, end-1, str);
      start = end + 1;
      end++;
    }
  };
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input);