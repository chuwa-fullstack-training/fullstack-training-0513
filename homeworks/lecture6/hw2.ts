interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Aaron",
    age: 99,
    occupation: "TypeScript Developer",
  },
  {
    name: "Alex",
    age: 98,
    role: "System Administrator",
  },
];

// fix the error showing in the following code:
// function logPerson(person: Person) {
//   let additionalInformation: string;
//   if (person.role) {
//     additionalInformation = person.role;
//   } else {
//     additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

/**
 * The original code works in JavaScript because JS does type checks at runtime.
 * However, TS does type checks at compile time.
 * If you are accessing properties that doesn't exist on the type, TS will raise an error.
 */

function logPerson(person: Person) {
  let additionalInformation: string =
    "role" in person ? person.role : person.occupation;
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
