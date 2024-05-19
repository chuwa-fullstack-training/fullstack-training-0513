/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
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
  level: "High",
  bark: function () {
    console.log("Wow, wow!");
  },
};
console.log(Object.getOwnPropertyDescriptor(myDog, "bark"));
console.log(Object.getOwnPropertyDescriptor(herDog, "bark"));

function extend(o, p) {
  // implement your code here
  for (let prop in p) {
    if (p.hasOwnProperty(prop)) {
      o[prop] = p[prop];
    }
  }
  return o;
}
let result = extend(myDog, herDog);
console.log("extend: " + JSON.stringify(result));

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  var result = {};
  for (let prop in p) {
    if (p.hasOwnProperty(prop)) {
      result[prop] = p[prop];
    }
  }
  for (let prop in o) {
    if (o.hasOwnProperty(prop)) {
      result[prop] = o[prop];
    }
  }
  return result;
}

const unionResult = union(myDog, herDog);
console.log("union: " + JSON.stringify(unionResult));

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  // implement your code here
  for (let prop in o) {
    if (!(prop in p)) {
      delete o[prop];
    }
  }
  return o;
}
let restrictResult = restrict(myDog, herDog);
console.log("restrict: " + JSON.stringify(restrictResult));

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
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
