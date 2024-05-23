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
  // build-in function
  // console.log(str.split(' ').reverse().join(' '));
  
  // inplace reverse word
  const reverse = (start, end) => {
    while (start < end) {
      const temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  }

  const reverseWord = () => {
    let start = 0;
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === ' ' || i === str.length) {
        reverse(start, i - 1);
        start = i + 1;
      }
    }
  }
  reverseWord();
  reverse(0, str.length - 1);

  console.log(str.join(''));
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);