// 1. why there would be error in the following code? and how to fix it?
// The type of the data returned by the function is not exactly the same as T, T may contain other attributes
// Fix: Use spread syntax (...) to generate the returned data, making sure it contains all the attributes in T.
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  // return {
  //   id: u.id,
  //   type: "customer",
  // };
  return {
    ...u,
    type: "customer",
  };
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Invalid arguments");
}
