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
  nums.sort();
  let last = 0, res = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] != nums[last]) {
      res += Math.floor(fac(i - last) / 2);
      last = i;
    }
    
  }
  res += Math.floor(fac(nums.length - last) / 2);
  return res;
}

function fac(i) {
  let res = 1;
  for (let x = 2; x <= i; ++x) {
    res *= x;
  }
  return res;
}

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  let news = [];
  let vow = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let ele of s) {
    if (!vow.has(ele)) {
      news.push(ele);
    }
  }
  return news.join("");
}

// test
// console.log(numIdenticalPairs([1, 2, 3, 2, 1, 1, 3, 3]));
// console.log(removeVowels("abcdefghij"));