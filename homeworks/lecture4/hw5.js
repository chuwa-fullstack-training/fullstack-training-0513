// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    const map = new Map();
    const cloneDeep = (data) => {
        if (typeof  data!== 'object' || data === null) {
            return data;
        }

        if (map.has(data)) {
            return map.get(data);
        }

        const clone = Array.isArray(data) ? [] : {};

        map.set(data, clone);

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                clone[key] = cloneDeep(data[key]);
            }
        }
        return clone;
    };

    return cloneDeep(obj);
}