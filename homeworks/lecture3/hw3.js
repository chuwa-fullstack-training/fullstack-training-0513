function counter() {
  // implement here
  let a = 0;
  return function (b = 0) {
    a += b;
    return a;
  }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
