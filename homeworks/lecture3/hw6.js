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
  let res = 0;
  let count = {};
  for (let num of nums) {
      if (count[num]) {
          res += count[num];
          count[num] += 1;
      } else {
          count[num] = 1;
      }
  }
  return res;
}

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  let set = new Set(['a', 'e', 'i', 'o', 'u']);

  // mehtod 1: map
  let strArr = s.split("").map((val) => {
    return set.has(val) ? "" : val;
  })
  return strArr.join("");

  // // method 2: filter
  // let strArr = s.split("").filter((char)=>{
  //   return !set.has(char);
  // })
  // return strArr.join("");

  // // method 3: reduce
  // let res = s.split("").reduce((accumulator, curChar) => {
  //   curChar = set.has(curChar) ? "" : curChar;
  //   return accumulator + curChar;
  // }, "");

  // return res;
}
