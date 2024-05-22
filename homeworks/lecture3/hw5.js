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
/*
Design requirement:
1. Should use closuree to create private scope to password
2. Given the hint from the example, I assume the password should be at least length: 6
*/
function User() {
    // implement here
    let passWord = undefined;

    function setPassword(newPassWord) {
        if (typeof newPassWord !== 'string' || newPassWord.length < 6) {
            throw new Error('Please type a string with at least length of 6');
        }
        passWord = newPassWord;
    }

    function checkPassword(passWordToCheck) {
        return passWordToCheck === passWord;
    }

    return {
        setPassword: setPassword,
        checkPassword: checkPassword
    };
}

//Test code for hw5.js
// const user = new User();
// console.log(user.setPassword('123456'));
// console.log(user.checkPassword('123456')); // true
// console.log(user.checkPassword('123')); // false
// user.password; // undefined
// try {
//     user.setPassword('123');
// } catch (e) {
//     console.log(e.message);
// }
// console.log(user.checkPassword('123')); // false
// user.password; // undefined