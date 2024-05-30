// 1. why there would be error in the following code? and how to fix it?
// type User = {
//   id: number;
//   type: string;
// };

// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };

/**
 * The return object should be a subtype of User that has all properties of User
 * To solve this, we have to ensure that all properties of User are included in the return object.
 * Since the function is to make a customer, we can change the type to customer
 */
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return { ...u, type: "customer" };
}

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

/**
 * We should add type checking for the parameters.
 */
function f(a: string | number, b: string | number): string | number {
  if (typeof a !== typeof b) {
    throw new Error("a and b should be both string or number");
  }
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Invalid types. ");
  }
}

try {
  console.log(f("string 1", "string 2"));
  console.log(f(99, 100));
  // f("string 3", 101);
} catch (e) {
  console.error(e.message);
}
