/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
//ES5
var Singleton = (function () {
    var instance;

    function Singleton() {
        if (instance) {
            return instance;
        }

        instance = this;
        return instance;
    }

    return Singleton;
})();

//ES6
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;

        return Singleton.instance;
    }
}