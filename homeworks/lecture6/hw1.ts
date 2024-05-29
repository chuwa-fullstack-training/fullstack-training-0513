// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}

//the returned object is a subtype of User, not guaranteed to be T.
//use type assertion to indicate the returned type is T

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}

function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === 'string') {
    return `${a} : ${b}`;
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else{
    throw new Error("Type of two parameter are not the same");
  }
}

