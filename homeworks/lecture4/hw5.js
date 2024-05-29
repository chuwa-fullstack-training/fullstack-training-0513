// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let map = new Map();

    function deepClone (obj) {
        if (obj === null || typeof obj != 'object') {
            return obj;
        }
        if (map.has(obj)) {
            return map.get(obj);
        }

        const copyItem = Array.isArray ? [] : {};
        map.set(obj, copyItem);
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                copyItem[key] = deepClone(obj[key]);
            }
        }

        return copyItem;
    }

    return deepClone(obj);
}

// test
const data = {
    name: 'foo',
    child: null
}
data.child = data;

let cloneData = cloneDeepWithLoop(data);
console.log(cloneData);