// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;
/*
map to store the already cloned one
*/

const cloneWithDeep = (obj) => {
    const map = new Map();
    const clone = (data) => {
        if (data === null || typeof data != obj) {
            return data;
        }
        if (map.has(data)) {
            return map.get(value);
        }
        const newObj = {};
        map.set(data, newObj);
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                newObj[key] = clone(data[key]);
            }
        }
        return newObj;
    }
    return clone(obj);
}

// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

// const cloneData = cloneWithDeep(data);
// console.log(data);
// console.log(cloneData);
// console.log(cloneData.child === cloneData);