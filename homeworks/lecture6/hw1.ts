// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}
// //test:
// const user = { id: 1, type: "student"};
// const customer = makeCustomer(user);
// console.log(customer);

//Ans: 1.The code error appears because the `makeCustomer` function designed to 
//accept an object of a type that extends from the `User`, but the actual
//returned object type from T may have more properties other than `id` and 
// `type` if 'u' has more properties. To fix this, I used the sperad operator
//`...` to copy all properites from the input object u and then overide the necessary
//properties in T and this change can ensure the return type return things 
//correctly even if there are more potential attributes in `User`.

//2. The second error is duplicate user declaration in hw2 and it will pop out the error
//with duplicate identifier `User`, to fix this one, I just change the `User` type
//into type: `User1 to fix this issue. 

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f1(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("function should accept either two strings or two numbers at the same time");
  }
}
//Ans:
//Problem(1): Duplicate function implementation, similar to the previous 
//question, change the definition of the function `f`to another name like
//`f1`.
//Problem(2): the error hint on `a+b` is becuase the compiler is not sure about 
//the b's type in the `else` branch as b is possible a number (one string one 
//number), this will result in a type mismatch. To solve this problem,
//add type check to ensure the condition of the function requirement 
//that both parameters are of the same type and handle the case that 
//a and b both number, a and b both strings, explicitly and for the 
//remaining cases, explicitly throw an error to indicating the wrong value.

//// Test:
//Case1: a and b both strings
// try {
//   console.log(f1("Hello", "Yuxuan"));
// } catch (e) {
//   console.log((e as Error).message);
// }
// //Expected Output: Hello: Yuxuan

// //Case2: a and b both numbers
// try {
//   console.log(f1(1,2));
// } catch (e) {
//   console.log((e as Error).message);
// }
// //Expected output: 3

// //Case 3: a is tring and b is number
// try {
//   console.log(f1(1, "Yuxuan"));
// } catch (e) {
//   console.log((e as Error).message);
// }
// //Expected: function should accept either two strings or two numbers at the same time