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
/*
  1. Brute force:
  Just uses two nested loops and check for wach pair (i, j) => if nums[i] === nums[j] && i < j
  and increase a gloabl count for each satisified variable.
  Time Complexity: O(n^2) -> n is the length of the array
  Space Complexity: O(1)

  #################
  2. Optimized one: Use key-value pair to keep track of the frequency of each number in the 
  current iteration. 
  Global variable: count
  map: {}
  In the main loop:
    If element already in hashmap -> count += map.get(key)

    Increment the key value: map.set(map.get(key) + 1)

  Time Complexity: O(n), Space Complexity: O(n)

*/
function numIdenticalPairs(nums) {
  // implement here
  let map = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      count += map[nums[i]];
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  return count;
}

//Test: 
//  Example 1:
//  Input: nums = [1,2,3,1,1,3]  Output: 4
//  Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
// console.log(numIdenticalPairs([1,2,3,1,1,3])); //Expected Value: 4
// Example 2:
// Input: nums = [1,1,1,1]  Output: 6
// Explanation: Each pair in the array are good.
// console.log(numIdenticalPairs([1,1,1,1])); //Expected Value: 6

// Example 3:
// Input: nums = [1,2,3]    Output: 0
// console.log(numIdenticalPairs([1,2,3])); // Expected Value: 0
/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
/*
Set -> put 'a', 'e' 'i', 'o', 'u' in the set 
result = ""
One time iteration for the original string, if found character in set then ignore
Otherwise added to the result string.

Time Complexity: O(n) -> One time iteration for the original string, n is the length of the string.
Space Complexity: O(1) -> Only need constant space to store 'a', 'e', 'i', 'o', 'u'.
*/
function removeVowels(s) {
  // implement here
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = "";
  for (let char of s) {
    if (vowels.has(char)) {
      continue;
    }
    result += char;
  }
  return result; 
}

//Testcases
// console.log(removeVowels("leetcodeisacommunityforcoders")); //Expected Output: "ltcdscmmntyfrcdrs"
// console.log(removeVowels("aeiou")); //Expected Output: ""