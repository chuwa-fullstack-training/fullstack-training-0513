// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//  5 5 5 5 5
// var是全局变量，所以在setTimeout执行的时候，i已经变成了5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// let是块级变量，所以每次循环都会生成一个新的i

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// 通过立即执行函数，将i的值传递给setTimeout

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};
// I am fn
// setTimeout是异步的，所以会先执行fn

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
// { name: 'another obj' }
// setTimeout是异步的，所以会先执行obj.name = "another obj"
