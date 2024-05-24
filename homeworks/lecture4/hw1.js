// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
    const tags = html.match(/<[^>]*>/g);
    if (!tags) {
        return false;
    }
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        if (tag.startsWith('</')) {
            let lastTag = stack.pop();
            if (!lastTag) {
                return false;
            }
            if (lastTag !== tag.slice(2, -1)) {
                return false;
            }
        } else {
            stack.push(tag.slice(1, -1));
        }
    }
    return stack.length === 0;
}