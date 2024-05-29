function counter() {
    let total = 0; 
    return function(num) {
        if (num !== undefined) { 
            total += num;
        }
        return total; 
    };
}

let count = counter();
console.log(count(3));  
console.log(count(5)); 
console.log(count());  
