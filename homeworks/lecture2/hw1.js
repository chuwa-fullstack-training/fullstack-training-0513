/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let newObject = {};
    for (let prop in p) {
        newObject[prop] = p[prop];
    }
    for (let prop in o) {
        newObject[prop] = o[prop];
    }
    return newObject;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let prop in o) {
        if (!(prop in p)) {
            delete o[prop];
        }
    }
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let newObject = {};
    for (let prop in o) {
        if (prop in p) {
            newObject[prop] = o[prop];
        }
    }
    return newObject;
}


/*
Test Function1: Test extend
*/
// let o = {a: 1, b: 2};
// let p = {b: 3, c: 4};
// let result = extend(o,p);
// console.log(o);

/*
Test Function2: Test union
*/
// let o = { a: 1, b: 2};
// let p = { a: 3, c: 4};

// let result = union(o,p);
// console.log(result);

/*
Test Function 3: Test restrict
*/
// let o = {a: 1, b: 2, c: 3}
// let p = {a: 4, d: 5}
// let result = restrict(o,p);
// console.log(result);

/*
Test Function 4: Test Intersection
*/
// let o = {a: 1, b: 2, c: 3};
// let p = {b: 4, c: 5, d: 6};
// let result = intersection(o,p);
// console.log(result);