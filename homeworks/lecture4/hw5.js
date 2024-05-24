// write a function to deep clone an object with circular reference

const cloneDeepWithLoop = (obj, history = new WeakMap()) => {
  if (obj === null || typeof obj !== "object") return obj;
  if (history.has(obj)) {
    return history.get(obj);
  }
  const clonedObj = Object.create(Object.getPrototypeOf(obj));
  history.set(obj, clonedObj);

  for (let key of Object.keys(obj)) {
    clonedObj[key] = cloneDeepWithLoop(obj[key], history);
  }

  return clonedObj;
};

const data = {
  name: "foo",
  child: null,
};
data.child = data;
const clone = cloneDeepWithLoop(data);
console.log(clone);