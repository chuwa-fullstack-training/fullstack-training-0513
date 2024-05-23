// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    max = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let p = 0;
    let q = list.length - 1;
    while (p < q) {
        let tmp = list[p];
        list[p] = list[q];
        list[q] = tmp;
        p++;
        q--;
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            count++;
        }
    }
    return count >= 2;
}