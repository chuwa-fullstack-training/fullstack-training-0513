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

// persons.forEach(logPerson);

// person is a union type of User and Admin, so it might not have the property role
function logPerson(person: Person) {
  let additionalInformation: string;
  // use in operator to check if the property exists in the prototype chain
  // or use .hasOwnProperty()
  // if ('role' in person) {
  if (person.hasOwnProperty('role')) {
    additionalInformation = (person as Admin).role;
  } else {
    additionalInformation = (person as User).occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);