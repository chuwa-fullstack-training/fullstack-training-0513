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
  const freqMap = {};

  for (let num of nums) {
    if (freqMap[num]) {
      //count the number of pairs
      count += freqMap[num]; //1+2+3
      freqMap[num] += 1;
    } else {
      freqMap[num] = 1;
    }
  }

  return count;
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); //4
console.log(numIdenticalPairs([1, 1, 1, 1])); //6
console.log(numIdenticalPairs([1, 2, 3])); //0

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let result = [];
  for (let char of s) {
    if (!vowels.has(char)) {
      //when char is not in vowels set, push it to result
      result.push(char);
    }
  }
  return result.join("");
}

console.log(removeVowels("Hello World")); // "Hll Wrld"
