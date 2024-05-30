// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): Pick<User, "id" | "type"> {
  return {
    id: u.id,  
    type: "customer",
  };
}
// change a return type

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if(typeof a === "number" && typeof b === "number") {
    return a + b;
  } else{
    throw new Error("one string and one number");
  }
}
D//efine two overloads for this, and add type guard