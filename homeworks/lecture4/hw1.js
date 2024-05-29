// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const tagRegex = ("<([A-Z][A-Z0-9]*)\b[^>]*>.*?</\1>");
    const stack = [];

    let match;
    while ((match = tagRegex.exec(html)) !== null) {
        const tag = match[1];
        if (tag.startsWith("/")) {
            const openTag = stack.pop();
            if (!openTag || openTag !== tag.substring(1)) {
                return false;
            }
        } else {
            stack.push(tag);
        }
    }

    return stack.length === 0;
}
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));
