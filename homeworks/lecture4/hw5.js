// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;
var adrmap = new Map();

const cloneDeepWithLoop = (obj) => {
    let res = {};
    adrmap.set(obj, res);
    for (let prop in obj) {
        if (typeof obj[prop] === "object" && obj[prop] !== null) {
            if (adrmap.has(obj[prop])) {
                res[prop] = adrmap.get(obj[prop]);
            } else {
                res[prop] = cloneDeepWithLoop(obj[prop]);
            }
        } else {
            res[prop] = obj[prop];
        }
    }
    return res;
}

// const data = {
//         name: 'foo',
//         child: null
//     }
//     data.child = data;
// const cloned = cloneDeepWithLoop(data);
// console.log(cloned);
// console.log(cloned.child === cloned);