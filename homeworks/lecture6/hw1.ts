// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u, // Preserve other properties of T
    type: "customer", // Override the type property
  } as T;
}

// problem: The function promises to return a value of type T, but what it actually returns is an object with the type attribute forcefully changed to "customer". Resulting in a T incompatibility

// fix:Use the expand operator to include other possible attributes of T, overriding the type attribute




// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
// function f(a: string | number, b: string | number) {
//   if (typeof a === "string") {
//     return `${a} : ${b}`;
//   } else {
//     return a + b;
//   }
// }
