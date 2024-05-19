let myDog = {
  name: "Cooper",
  age: 1,
  breed: "Golden Retriever",
  talent: "Jumping",
  bark: function () {
    console.log("Woof, woof!");
  },
};

let herDog = {
  name: "John",
  age: 2,
  breed: "Golden Retriever",
  level: "High",
  bark: function () {
    console.log("Wow, wow!");
  },
};

function intersection(o, p) {
  // implement your code here
  var result = {};
  for (let prop in o) {
    if (o.hasOwnProperty(prop) && p.hasOwnProperty(prop)) {
      result[prop] = o[prop];
    }
  }

  return result;
}
const intersectionResult = intersection(myDog, herDog);
console.log("intersection: " + JSON.stringify(intersectionResult));
