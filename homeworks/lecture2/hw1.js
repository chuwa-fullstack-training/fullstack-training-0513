const o = {
	a: 1,
	b: '123',
	c: true,
	d: 1,
	e: undefined,
	f: Symbol('f'),
	g: function() {
			return 'g';
	}
};

const p = {
	i: 2,
	j: '456',
	k: false,
	d: null,
	e: 2,
	f: Symbol('pf'),
	g: function() {
			return 'pg';
	},
	h: {
			a: 1,
			b: 2
	}
};

/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/

function extend(o, p) {
    // implement your code here
	for (let property in p) {
		o[property] = p[property];
	}
	return o;		
}
// const newO = extend(o, p);
// console.log(newO);
// console.log(newO.g());

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
		const newObject = {};
		for (let property in o) {
			newObject[property] = o[property];
		}
		for (let property in p) {
			if (!newObject[property]) {
				newObject[property] = p[property];
			}
		}
		return newObject;
		// const newObject = extend({}, p);
		// return extend(newObject, o);
}
// const newObject = union(o, p);
// console.log(newObject);
// console.log(newObject.g());

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
		for (let property in o) {
			// Not working if the value is undefined, null, or false
			// if (!p[property]) {
			// 	delete o[property];
			// }

			// if (!p.hasOwnProperty(property)) {
			// 	delete o[property];
			// }
			// or
			if (!(property in p)) {
				delete o[property];
			}
		}
		return o;
}
// const newO = restrict(o, p);
// console.log(newO);

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
		const newObject = {};
		for (let property in o) {
			if (property in p) {
				newObject[property] = o[property];
			}
		}
		return newObject;
}
// const newObject = intersection(o, p);
// console.log(newObject);
// console.log(newObject.g());