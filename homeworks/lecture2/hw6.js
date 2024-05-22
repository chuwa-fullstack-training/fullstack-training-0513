// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = list[0];
    for (let i = 1; i < list.length; i++){
        if (list[i] > max){
            max = list[i];
        }
    }
    return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let start = 0;
    let end = list.length - 1;
    while (start < end){
        let temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for (let i = 0; i < list.length; i++){
        if (list[i] === element){
            count++;
        }
    }
    return count >= 2;
}