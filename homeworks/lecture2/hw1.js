/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // assume shallow copy suffice
    for(let prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    const newobj = {};
    for (let prop in p) {
        newobj[prop] = p[prop];
    }
    for (let prop in o) {
        newobj[prop] = o[prop];
    }
    return newobj;
    
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    let newobj = {};
    for (let prop in o) {
        if (prop in p) {
            newobj[prop] = o[prop];
        }
    }
    o = newobj;
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    const obj = {};
    for (let prop in o) {
        if (prop in p) {
            obj[prop] = o[prop];
        }
    }
    return obj;
}

console.log(extend({x: 3}, {a: 1, b : 2}));
console.log(union({x: 3}, {a: 1, b : 2}));
console.log(restrict({x: 3, a: 55}, {a: 1, b : 2}));
console.log(intersection({x: 3, a: 55}, {a: 1, b : 2}));