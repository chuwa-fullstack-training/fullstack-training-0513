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
console.log(process.argv);
const fs = require("fs");
const path = require("path");
if (process.argv[2] === null || process.argv[3] === null) {
  throw new Error("please enter valid command");
}
const directoryPath = process.argv[2]; //这里写`./${process.argv[2]}`也没问题
let type = process.argv[3];

fs.readdir(directoryPath, (err, files) => {
  if (err) console.error("error:", err);
  let res;
  if (type == "") {
    res = files.filter((file) => path.extname(file) === type);
  } else {
    type = "." + type;
    res = files.filter((file) => path.extname(file) === type);
  }
  console.log("The filtered result:", res);
});
//test case1:
//node hw1.js test ''
//output: [ 'test4' ]

//test case2:
//node hw1.js test txt
//output: [ 'test1.txt', 'text2.txt' ]

//test case3:
//node hw1.js test html
//output: [ 'text3.html' ]
