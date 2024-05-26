function counter() {
    let total = 0;
    return function(num){
        if(!isNaN(num)){
            total += num;
        }
        return total;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8