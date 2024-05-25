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
    var inst = this;
    Singleton = function Singleton() {
        return inst;
    }
    this.name = "XX";
}
// ES6
class Singleton {
    constructor() {
        if (Singleton._instance) {
            return Singleton._instance;
        }
        Singleton._instance = this;
        this.name = "xx";
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1.name);
console.log(instance2.name);
console.log(instance1 === instance2); // Output: true
