// /**
//  * reverse words in a string
//  *
//  * input: "the sky is blue"
//  * output: "blue is sky the"
//  *
//  * extra: in-place
//  * @param {string[]} str
//  */
function reverseWords(str) {
  // your code here
  // let current = '';
  // const result = [];
  // for (i of str) {
  //   if (i !== ' ') {
  //     current += i;
  //   } else if (current) {
  //     result.unshift(current);
  //     current = '';
  //   }
  // }
  // if (current) {
  //   result.unshift(current);
  // }
  // return result.join(' ');
  // Optimize in-place
  reverse(str, 0, str.length - 1);
  //Two pointers
  let i = 0;
  for (let j = 0; j <= str.length; j++) {
    if (j < i || j === str.length || str[j] === ' ') {
      reverse(str, i, j - 1);
      i = j + 1;
    }
  }
  return str.join('');
}

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right],arr[left]];
    left++;
    right--;
  }
}
const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'];
console.log(reverseWords(input)); // Expected Output: "blue is sky the"

