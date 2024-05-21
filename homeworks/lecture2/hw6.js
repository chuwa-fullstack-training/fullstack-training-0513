// Algorithms

const list = [2, 1, 5, 4, 3];

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    // let largest = list[0];
    // for (let i = 1; i < list.length; i++) {
    //     if (list[i] > largest) {
    //         largest = list[i];
    //     }
    // }
    
    // let largest = Math.max(...list);

    let largest = list.sort()[list.length - 1];

    return largest;
}
// console.log(largestElement(list));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    // return list.reverse();
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
console.log(reverseList(list));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
}