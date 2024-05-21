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
  let password = null;

  this.setPassword = function (newPassword) {
    if (password) {
      throw new Error("Password already set");
    }
    if (newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
    password = newPassword;
  };

  this.checkPassword = function (checkPassword) {
    return password === checkPassword;
  };
}

const user = new User();
user.setPassword("123456");
console.log(user.checkPassword("123456")); // true
console.log(user.checkPassword("123")); // false
console.log(user.password); // undefined

try {
  user.setPassword("123"); // Error
} catch (e) {
  console.log(e.message); // Password must be at least 6 characters long
}

console.log(user.checkPassword("123")); // false
console.log(user.password); // undefined
