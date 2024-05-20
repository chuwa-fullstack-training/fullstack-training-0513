// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    //Edge case handle
    if (list.length === 0) {
        throw new Error("List is Empty");
    }
    let largest = list[0];
    let length = list.length;
    for (let i = 1; i < length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }
    return largest;
}

// 2. Write function that reverses a list, preferably in place.
/*
for (let i = 0; i < list.length / 2; i++)
    {
        swap(list[i], list[list.length- i -1])
    }
Case 1: The number of elements in the list is odd
[1  2   3   4   5] -> [5    4   3   2   1]
list.length / 2 = 2.5
i = 0 -> [5 2 3 4 1]
i = 1 -> [5 4 3 2 1]
i = 2 -> [5 4 3 2 1] Work

Case2: The number of elements in the list is even
[1  2   3   4   5   6] -> Expected: [6 5 4 3 2 1]
list.length / 2 = 3
for (let i = 0; i < 3; i++)
    i = 0; -> [6 2 3 4 5 1] 
    i = 1; -> [6 5 3 4 2 1]
    i = 2; -> [6 5 4 3 2 1] (Work)


*/
function reverseList(list) {
    // implement your code here
    //Method 1: Directly call list.reverse() API, with time complexity: O(n)
    //Method 2: Implement in place manually
    //Two pointer method to swap elements, time complexity: O(n), Space Complexity: O(1)
    for (let i = 0; i < list.length / 2; i++) {
        //Swap the list elements
        [list[i], list[list.length - i - 1]] = [list[list.length - i - 1], list[i]];
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here Time Complexity: O(n), Space Complexity: O(1)
    let count = 0;
    for (i of list) {
        if (i === element) {
            count++;
        }
        if (count == 2) {
            return true;
        }
    }
    return false;
}

/*
Test Cases for Problem 1
*/
//Test Cae1: All number is positive number
// let testList = [3,6,2,56,32,5,89,32];
// console.log(largestElement(testList)); //Expected value: 89

//Test Case2: There include negative number in the list
// let testList2 = [3,5,7,2,6,-1,4,10,12]; 
// console.log(largestElement(testList2)); //Expected Value: 12

//Test Case 3: There are all negative number in the list
// let testList3 = [-3,-5,-7,-2,-8,-1,-4,-10,-12];
// console.log(largestElement(testList3)); //Expected value: -1
////////////////////////////////////////////////////////////////

/*
Test Cases for Problem 2
*/
//Test Case 1: 
// let testList1 = [1, 2, 3, 4, 5];
// console.log(reverseList(testList1)); //Expected: [5,4,3,2,1]

//Test case 2: Single element
// let testList2 = [1];
// console.log(reverseList(testList2)); //Expected: [1]

//Test Case3: Empty list
// let testList3 = [];
// console.log(reverseList(testList3)); //Expected: []

//Test Case4: List contain string elements
// let testList4 = ['a', 'b', 'c', 'd', 'e'];
// console.log(reverseList(testList4)); //Expected:['e', 'd', 'c', 'b', 'a']

//////////////////////////////////////////////////////////////////////////

/*
Test Cases for Problem 3
*/
//Test Cse1: The element appears twice in an array
// let testList1 = [1, 2, 3, 4, 5, 1];
// console.log(checkTwice(testList1,1)); //Expected: true
// console.log(checkTwice(testList1,2)); //Expected: false
// //Test the case that an element not in the list
// console.log(checkTwice(testList1,6)) //Expected: false

//Test Case2: the case that an element appears more than twice
// let testList2 = [1,1,1,2];
// console.log(checkTwice(testList2,1)); //Expected: true

//Test Case3: test for the string case
// let testList3 = ['a','b','a'];
// console.log(checkTwice(testList3,'a')); //Expected: true
// console.log(checkTwice(testList3, 'b')); //Expected: false

//Test Case 4: Test for the object case
// let obj = { key: 'value' };
// let testList4 = [obj, obj];
// console.log(checkTwice(testList4,obj)); //Expected: true
