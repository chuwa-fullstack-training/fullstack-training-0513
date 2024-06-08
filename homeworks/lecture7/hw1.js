/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 *
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program
 *  - process.argv[1] is the path to the script file
 *  - process.argv[2] is the first command-line argument
 *    e.g. node hw1.js currentDir txt - process.argv[2] is `currentDir`, process.argv[3] is `txt`
 */

// your code here
// import modules
const fs = require('fs');
const path = require('path');

// get dirName，file extension through process
const dirName = process.argv[2];
const designatedExtension = process.argv[3] ? '.' + process.argv[3] : undefined;

if (!dirName) {
    throw new Error('please provide a valid director.');
}

// get result
fs.readdir(dirName, (err, files) => {
    if (err) {
        throw err;
    } else if (designatedExtension) {
        files = files.filter(file => path.extname(file) === designatedExtension);
    }
    
    files.forEach(file => console.log(file));
})

// test node hw1 ../lecture9 md // log "hw1.md"
// test node hw1 ../lecture8 // log all files