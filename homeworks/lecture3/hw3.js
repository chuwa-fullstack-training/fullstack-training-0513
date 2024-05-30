function counter() {
    var rst = 0;
    return function add(number){
        if(!number)return rst;
        rst += number;
        return rst;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8