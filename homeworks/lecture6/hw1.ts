// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  }as T;
}

//Error: TypeScript is expecting the return type T but is not able to infer it correctly.
//Fixing: Adding as T at the end assures TypeScript that the returned object conforms to the type T.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error

function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Parameters must be of the same type (either two strings or two numbers).");
  }
}