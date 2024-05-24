// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  let stack = [];
  let i = 0;
  let tagStart = -1;
  let tagEnd = -1;

  while (i < html.length) {
    if (html[i] === "<") {
      tagStart = i;
    } else if (html[i] === ">") {
      tagEnd = i;
      if (html[tagStart + 1] === "/") {
        if (
          stack.length !== 0 &&
          stack[stack.length - 1] === html.slice(tagStart + 2, tagEnd)
        ) {
          stack.pop();
          tagStart = -1;
        } else {
          return false;
        }
      } else {
        stack.push(html.slice(tagStart + 1, tagEnd));
        tagStart = -1;
      }
    }
    i += 1;
    // console.log(stack);
  }
  return stack.length ? false : true;
}
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
);
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></head></html>")
);
console.log(checkValidHTML("<html><head><title>My Title</title></head></html"));
