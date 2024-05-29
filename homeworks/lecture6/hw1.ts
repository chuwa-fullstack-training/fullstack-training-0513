// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}
// ans: The error in the provided TypeScript code occurs because the object returned by makeCustomer does not match the type T. 
// The type T extends User, but the returned object only contains the properties id and type, 
// and it does not include any additional properties that might be part of T.


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("parameters should have the same type");
  }
}
