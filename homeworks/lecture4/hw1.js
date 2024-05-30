// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const tagPattern = /<\/?([a-zA-Z]+[a-zA-Z0-9]*)\s*[^>]*>/g;
    const stack = [];
    let match;

    while ((match = tagPattern.exec(html)) !== null) {
        const tag = match[0];
        const tagName = match[1];

        if (tag[1] !== '/') {
            stack.push(tagName);
        } else {
            if (stack.length === 0 || stack.pop() !== tagName) {
                return false;
            }
        }
    }

    return stack.length === 0;
}