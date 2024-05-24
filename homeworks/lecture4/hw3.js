/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// // Singleton pattern in ES5
// var Singleton = (function () {
//   var instance;
//   function Singleton() {
//     if (!instance) {
//       instance = {};
//     }
//     return instance;
//   }
//   return Singleton;
// })();
// var instance1 = new Singleton();
// var instance2 = new Singleton();
// console.log(instance1 === instance2);

// Singleton pattern in ES6
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}
var instance3 = new Singleton();
var instance4 = new Singleton();
console.log(instance3 === instance4);
