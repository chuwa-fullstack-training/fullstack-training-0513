// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  let max = list[0];
  for (const item of list) {
    if (item > max) max = item;
  }
  return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  let l = 0,
    r = list.length - 1;
  while (l < r) {
    [list[l], list[r]] = [list[r], list[l]];
    l++;
    r--;
  }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  let res = 0;
  for (const item of list) {
    if (item == element) res++;
  }
  return res >= 2;
}
