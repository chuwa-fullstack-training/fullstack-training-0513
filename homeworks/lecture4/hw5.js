// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const map = new Map();

    function cloneHelper(item) {
        if (item === null || typeof item !== 'object') {
            return item;
        }

        if (map.has(item)) {
            return map.get(item);
        }

        const clone = Array.isArray(item) ? [] : {};

        map.set(item, clone);

        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                clone[key] = cloneHelper(item[key]);
            }
        }

        return clone;
    }

    return cloneHelper(obj);
}