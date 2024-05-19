// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  if (list.length === 0) {
    return null;
  }
  let max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}
const numbers = [3, 5, 7, 2, 8];
console.log(largestElement(numbers));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    let temp = list[left];
    list[left] = list[right];
    list[right] = temp;
    left++;
    right--;
  }
  return list;
}
const numbers2 = [3, 5, 7, 2, 8];
console.log(reverseList(numbers2));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      count++;
      if (count === 2) {
        return true;
      }
    }
  }
  return false;
}
const numbers3 = [1, 2, 3, 4, 5, 2, 3];
console.log(checkTwice(numbers3, 2));
console.log(checkTwice(numbers3, 3));
console.log(checkTwice(numbers3, 6));
