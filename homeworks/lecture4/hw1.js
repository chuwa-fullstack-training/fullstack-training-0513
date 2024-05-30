// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  const stack = [];
  const reg = /<\/?([0-9a-zA-Z])+[^>]*>/g;
  let match;
  while ((match = reg.exec(html)) !== null) {
    const tag = match[0];
    const tagName = match[1];
    if (tag[1] !== "/") {
      stack.push(tagName);
    } else {
      if (stack.length == 0 || stack.pop() !== tagName) {
        return false;
      }
    }
  }
  return true;
}

const s = "<html><head><title>My Title</title></head></html";
console.log(checkValidHTML(s));
