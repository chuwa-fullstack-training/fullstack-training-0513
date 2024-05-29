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


    

    this.setPassword = function(newPassword) {
        if (typeof newPassword !== 'string' || newPassword.length < 6) {
            throw new Error('Password must be a string and at least 6 characters long.');
        }
        password = newPassword;
    };

    this.checkPassword = function(testPassword) {
        return testPassword === password;
    };
}

const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); 
console.log(user.checkPassword('123')); 
console.log(user.password); 

try {
    user.setPassword('123');
} catch (error) {
    console.error(error.message); 
}
console.log(user.checkPassword('123456')); 
console.log(user.password); 
