// Algorithms

// 1. Write a function that returns the largest element in a list.
// time: O(n), space: O(1)
function largestElement(list) {
  // implement your code here
  // return Math.max(...list);
  let res = -Infinity;
  for (let item of list) {
    if (item > res) res = item;
  }
  return res;
}

// 2. Write function that reverses a list, preferably in place.
// time: O(n), space: O(1)
function reverseList(list) {
  // implement your code here
  // return list.reverse();
  let i = 0, j = list.length - 1;
  while (i < j) {
    const t = list[i];
    list[i] = list[j];
    list[j] = t;
    i++;
    j--;
  }
  return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
// time: O(n), space: O(1)
function checkTwice(list, element) {
  // implement your code here
  // return list.filter(val => val === element).length >= 2;
  let frequency = 0;
  for (let item of list) {
    if (item === element) {
      frequency++;
      if (frequency >= 2) return true;
    }
  }
  return frequency >= 2;
}
