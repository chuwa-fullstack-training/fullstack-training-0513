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
  // s = s.trim();
  // const input = s.split(/\s+/);
  // let result = "";
  // for (let i = input.length - 1; i >= 0; i--){
  //     result += input[i];
  //     if (i !== 0){
  //         result += " ";
  //     }
  // }
  // return result

  function reverse(str, start, end) {
    while (start < end) {
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }
  }

  reverse(str, 0, str.length - 1);

  let start = 0;
  for (let end = 0; end <= str.length; end++) {
    if (str[end] === ' ' || end === str.length) {
      reverse(str, start, end - 1);
      start = end + 1;
    }
  }

  return str.join('');
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);