// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  let res = Number.MIN_VALUE;
  for (var i = 0; i < list.length; i++) {
    res = res > list[i] ? res : list[i];
  }
  return res;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  let l = 0;
  let r = list.length - 1;
  while (l < r) {
    temp = list[l];
    list[l] = list[r];
    list[r] = temp;
    l++;
    r--;
  }
  return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  let seen = false;
  for (let i = 0; i < list.length; i++) {
    if (element === list[i]) {
      if (seen) {
        return true;
      } else {
        seen = true;
      }
    }
  }
  return false;
}
