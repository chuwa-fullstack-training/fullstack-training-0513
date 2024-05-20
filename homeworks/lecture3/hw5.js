/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 *
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
  // implement here
  let password = "";

  this.setPassword = function (s) {
    if (s.length >= 6) {
      password = s;
    } else {
      throw new Error("error!");
    }
  };
  this.checkPassword = function (s) {
    return s === password;
  };
}

const user = new User();
try {
  user.setPassword("123456");
  console.log(user.checkPassword("123456")); // true
  console.log(user.checkPassword("123")); // false
  console.log(user.password); // undefined
  console.log(user.setPassword("123")); // Error
} catch (error) {
  console.log(error.message);
}
console.log(user.checkPassword("123")); // false
console.log(user.password); // undefined
