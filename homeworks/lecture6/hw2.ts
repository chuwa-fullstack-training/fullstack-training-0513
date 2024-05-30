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
function logPerson(person: Person) {
  let additionalInformation: string;
  if (person.role !== undefined && typeof person.role === "string") {
    additionalInformation = person.role;
  } else if(person.occupation !== undefined && typeof person.occupation === "string") {
    additionalInformation = person.occupation;
  } else {
    throw new Error("no role or occupation");
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);