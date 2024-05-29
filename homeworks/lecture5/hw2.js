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
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  reverse(str, 0, str.length - 1);

 
  let start = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ' || i === str.length) { 
      reverse(str, start, i - 1);
      start = i + 1;
    }
  }
}

const input = 'the sky is blue'.split('');
reverseWords(input);
console.log(input.join('')); 