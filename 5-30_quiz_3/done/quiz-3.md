3. 
Create a function named promisifyValue which takes an argument of any type and returns a Promise which resolves to that value.

For example:

await promisifyValue(2) should return 2
await promisifyValue(3).then(val => val + 1) should return 4

// hint: how to write the test case?