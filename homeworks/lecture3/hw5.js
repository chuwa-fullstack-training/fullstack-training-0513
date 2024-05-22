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
    let pwd = "";
    let setted = false;
    this.setPassword = function(newpwd) {
        if (setted) {
            throw new Error;
        }
        setted = true;
        pwd = newpwd;
    }
    this.checkPassword = function(pwdin) {
        return pwd === pwdin;
    }
}

// test
// const user = new User();
// user.setPassword('123456');
// console.log(user.checkPassword('123456')); // true
// console.log(user.checkPassword('123')); // false
// console.log(user.password); // undefined
// user.setPassword('123'); // Error
// user.checkPassword('123'); // false
// user.password; // undefined