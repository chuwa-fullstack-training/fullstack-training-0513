// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    return Math.max(...list);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    let l = 0, r = list.length - 1;
    while (l < r) {
        let temp = list[l];
        list[l++] = list[r];
        list[r--] = temp;
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let count = 0;
    for (let ele of list) {
        if (ele === element) {
            ++count;
            if (count >= 2) { return true; }
        }
    }
    return false;
}


// console.log(largestElement([1, 3, 4, 2, 5, 7, 3]));
// let ls = [1, 2, 3, 4, 5];
// reverseList(ls);
// console.log(ls);
// console.log(checkTwice([1, 3, 4, 2, 5, 7, 3], 3));