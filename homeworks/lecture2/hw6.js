// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = -Infinity;
    for(let e in list){
        if(list[e]>max){
            max = list[e];
        }
    }
    return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    for(let i=0;i<list.length/2;i++){
        let temp = list[list.length-1-i];
        list[list.length-1-i] = list[i];
        list[i] = temp;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let time  = 0;
    for(let e in list){
        if (list[e]===element){
            time++;
            if(time>=2){
                return true;
            }
        }
    }
    return false;
}