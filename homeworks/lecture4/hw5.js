// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  const deepClone = function(obj = {}, set = new Set()) {
    if (obj == null || typeof obj !== 'object' || set.has(obj)) return obj;
    set.add(obj);
    let res = obj instanceof Array ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        res[key] = deepClone(obj[key], set);
      }
    }
    return res;
  };
  return deepClone(obj, new Set());
}
