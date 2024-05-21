/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]    Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
function numIdenticalPairs(nums) {
  // implement here
  let count = 0;
  let map = {};
  for (let num of nums) {
    if (map[num]) {
      count += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  // brute force solution
  // let count = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       count++;
  //     }
  //   }
  // }
  return count;  
}

// Test cases
// console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4
// console.log(numIdenticalPairs([1,1,1,1])); // 6
// console.log(numIdenticalPairs([1,2,3])); // 0


/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  // brute force solution
  let result = '';
  for (let char of s) {
    if (!'aeiou'.includes(char)) {
      result += char;
    }
  }
  return result;

  // using array methods
  // return s.split('').filter(char => !'aeiou'.includes(char)).join('');

  // using regex
  // return s.replace(/[aeiou]/g, '');

  // use slice
  // for (let i = 0; i < s.length; i++) {
  //   if ('aeiou'.includes(s[i])) {
  //     s = s.slice(0, i) + s.slice(i + 1);
  //     i--;
  //   }
  // }
  // return s;
}

// Test cases
console.log(removeVowels('leetcode')); // ltcd
console.log(removeVowels('aeiou')); // ''
