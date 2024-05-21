/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
const Singleton = (function () {
  let instance;

  function MyFunc () {
    if (instance) return instance;
    instance = this;

    this.name = 'name';
  }

  MyFunc.prototype.myName = function () {
    console.log(this.name)
  };

  MyFunc.prototype.setName = function (name) {
    this.name = name;
  };

  return MyFunc;
})();
