/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
/*
Utilize set structure 
setfor nums1: [1 2]
for i in nums 2:
  2 in nums1
resultSet: [2]

Time Complexity: O(n + m) -> n is the length of the array1, m is the length of the array2
Space Complexity: O(n) -> minmum of n & m Uses a set to store as less element as possible for 
array1 & array2
*/
const intersection = (nums1, nums2) => {
  // Your solution here
  if (nums1 == null || nums2 == null) {
    return null;
  }
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let set = new Set(nums1);
  for (num of nums1) {
    set.add(num);
  }
  let result = new Set();
  for (num of nums2) {
    if (set.has(num)) {
      result.add(num);
    }
  }
  return [...result];
};
//Test File
//Test Case 1:
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(intersection(nums1, nums2)); //Expected Result: [2]

//Test Case 2:
let nums3 = [4, 9, 5];
let nums4 = [9, 4, 9, 8, 4];
console.log(intersection(nums3, nums4)); //Expected Result: [4, 9]

