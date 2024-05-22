// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const seen = new WeakMap()

    const clone = (item) => {
        if (item === null || typeof item !== 'object'){
            return item
        }
        if(seen.has(item)){
            return seen.get(item)
        }

        const copy = Array.isArray(item) ? [] : {};
        seen.set(item,copy)
        for (const key in item){
            if(item.hasOwnProperty(key)){
                copy[key] = clone(item[key])
            }
        }

        return copy
    }
    return clone(obj)
}