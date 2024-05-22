function counter() {
    let ct = 0;
    return function (incr) {
        if (incr !== undefined) { ct += incr; }
        return ct;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8