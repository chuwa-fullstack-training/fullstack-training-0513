// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (newObj, oldObj) => {
  // Implement the function here
  for (let k in oldObj) {
    if (oldObj[k] instanceof Array) {
      newObj[k] = [];
      deepCopy(newObj[k], oldObj[k]);
    } else if (oldObj[k] instanceof Object) {
      newObj[k] = {};
      deepCopy(newObj[k], oldObj[k]);
    } else {
      newObj[k] = oldObj[k];
    }
  }
};
