// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const tagPattern = /<\/?([a-zA-Z0-9]+)[^>]*>/g; 

    while ((match = tagPattern.exec(html)) !== null) {
        const tag = match[0];
        const tagName = match[1];
        if (tag[1] !== '/') { 
        } else { // It's a closing tag
            if (stack.length === 0) {
                return false; 
            }
            const lastTag = stack.pop();
            if (lastTag !== tagName) {
                return false;
            }
        }
    }


    return stack.length === 0; 
}

// Example tests
console.log(checkValidHTML("<html><head><title>My Title</title></head></html>")); 
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>")); 
console.log(checkValidHTML("<html><head><title>My Title</title></head></html")); 

