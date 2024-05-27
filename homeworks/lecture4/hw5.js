// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, cmap) => {
    // Implement the function here
    if (!cmap) {
        cmap = new Map();
    }
    let newobj = {};
    for (let key in obj) {
        let value = obj[key];
        if (value instanceof Array) {
            newobj[key] = cloneDeepWithLoop(value, cmap);
        } else if (value instanceof Object) {
            if (!cmap.has(value)) {
                cmap.set(value, 1);
                newobj[key] =  cloneDeepWithLoop(value, cmap);
            } 
        } else {
            newobj[key] = value;
        }
    }
    return newobj;
}