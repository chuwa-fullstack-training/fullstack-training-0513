// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  const cloned = {};
  const clonedMap = new Map();
  const stack = [{obj, cloned}];
  while (stack.length > 0) {
    const { obj, cloned } = stack.pop();
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (clonedMap.has(obj[key])) {
          console.log(clonedMap.get(obj[key]), key);
          cloned[key] = clonedMap.get(obj[key]);
        } else {
          cloned[key] = {};
          clonedMap.set(obj[key], cloned[key]);
          stack.push({obj: obj[key], cloned: cloned[key]});
        }
      } else {
        cloned[key] = obj[key];
      }
    }
  }
  return cloned;
};

const data = {
  name: "foo",
  child: null,
};
data.child = data;

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData.child === data.child); // Output: true