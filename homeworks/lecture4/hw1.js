// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  let stack = [];
  let tagName = '', isCloseTag = false, isTagName = false;
  for (let i = 0; i < html.length; i++) {
    if (html[i] === '/') continue;
    if (html[i] === '<') {
      isTagName = true;
      isCloseTag = (i + 1 < html.length && html[i + 1] === '/');
    } else if (html[i] === '>') {
      if (isCloseTag) {
        if (tagName !== stack.pop()) return false;
      } else {
        stack.push(tagName);
      }
      tagName = '';
      isTagName = false;
    } else {
      if (isTagName) tagName += html[i];
    }
  }
  if (tagName !== '' && tagName !== stack.pop()) return false;
  return stack.length === 0;
}
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'));
