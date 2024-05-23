/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

// es5
function Singleton(){
  // some fake properties
  this.name = 'Singleton';
  return Singleton.instance || (Singleton.instance = this);
}

// es6
class Singleton1 {
  constructor(){
    // some fake properties
    this.name = 'Singleton1';
    return Singleton1.instance || (Singleton1.instance = this);
  }
}

// test
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); 

const instance3 = new Singleton1();
const instance4 = new Singleton1();
console.log(instance3 === instance4);