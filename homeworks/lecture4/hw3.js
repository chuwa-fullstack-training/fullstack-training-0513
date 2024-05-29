/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

// ES5
function Singleton() {
    // return this.generateInstance();
    if (Singleton.prototype.hasInstance) {
        console.log("You've already created the instance.");
    } else {
        Singleton.prototype.hasInstance = true;
        Singleton.prototype.instance = {id: 1};
        console.log("Created successfully");
    }
    return this.instance;
}

Singleton.prototype = {
    hasInstance: false,
    instance: undefined
}

// test for ES5
console.log(Singleton.prototype);
let s1 = new Singleton();
let s2 = new Singleton();
console.log(Singleton.prototype);
console.log(s1 === s2);

// ES6
class SingletonClass {
    static _instance;

    constructor() {
        if (SingletonClass._instance) {
            console.log("You've already created the instance.");
        } else {
            SingletonClass._instance = {id: 1};
            console.log("Created successfully");
        }

        return SingletonClass._instance;
    }
}

// test for ES6
console.log("Test for ES6");

console.log(SingletonClass._instance)
let s3 = new SingletonClass();
console.log(SingletonClass._instance)
let s4 = new SingletonClass();

console.log(s3 === s4);