// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  const stack = [];
  const cloned = {};
  stack.push([obj, cloned]);
  while (stack.length > 0) {
    const [original, copy] = stack.pop();
    for (let key in original) {
      const value = original[key];
      if (typeof value === "object") {
        if (copy[key] === undefined) {
          copy[key] = value;
          stack.push([value, copy[key]]);
        } else {
          copy[key] = copy;
        }
      } else {
        copy[key] = value;
      }
    }
  }
  return cloned;
};

// Test
const data = {
  name: "foo",
  child: null,
};
data.child = data;
const cloned = cloneDeepWithLoop(data);
console.log(cloned);
console.log(cloned === cloned.child);
console.log(typeof data.name);
