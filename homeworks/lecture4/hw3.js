/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
//Singleton pattern in ES5
let Singleton = (function() {
  let instance;

  function SingleInstance() {
    if (instance !== undefined) {
      return instance;
    }
    instance = this;
    return instance;
  }
  return SingleInstance;
})();

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true

//Singleton Pattern in ES6
class SingletonES6 {
  constructor() {
    if (SingletonES6.instance) {
      return SingletonES6.instance;
    }
    SingletonES6.instance = this;
    return this;
  }
}
const instance3 = new SingletonES6();
const instance4 = new SingletonES6();
console.log(instance3 === instance4);