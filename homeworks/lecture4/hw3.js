/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// ES6
class SingletonES6 {
    static getInstance() {
        if (!SingletonES6.instance) {
            SingletonES6.instance = new SingletonES6();
        }
        return SingletonES6.instance;
    }

    constructor() {
        if (!SingletonES6.instance) {
            SingletonES6.instance = this;
        }
        return SingletonES6.instance;
    }
}

const instance1 = new SingletonES6();
const instance2 = new SingletonES6();
console.log(instance1 === instance2); 






// ES5
var SingletonES5 = (function() {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var instance3 = SingletonES5.getInstance();
var instance4 = SingletonES5.getInstance();
console.log(instance3 === instance4); 
