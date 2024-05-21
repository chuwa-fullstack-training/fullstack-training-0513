// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    if (list.length === 0){
        return null;
    }

    let largest = list[0]
    for (let i of list){
        if (i > largest){
            largest = i;
        }        
    }

    return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    if (list.length === 0){
        return null;
    }

    let left = 0;
    let right = list.length - 1;
    while (left < right){
        let temp = list[left];
        list[left] = list[right];
        list[right] = temp;
        left += 1;
        right -= 1;
    }
    
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    if (list.length === 0){
        return false;
    }

    let times = 0;
    for (let i of list){
        if (i === element){
            times += 1;
        }        
    }

    return times >= 2;
}