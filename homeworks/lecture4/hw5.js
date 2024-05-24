// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const cloned = new Map();

    const clone = (obj) => {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        if (cloned.has(obj)) {
            return cloned.get(obj);
        }
        const newobj = {};
        cloned.set(obj, newobj);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)){
                newobj[key] = clone(obj[key]);
            }
            
        }
        return newobj;

    };
    return clone(obj);

}
const data = {
    name: 'foo',
    child: null
};
data.child = data;

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData);

