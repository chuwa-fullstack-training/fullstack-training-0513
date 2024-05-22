// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
    // implement your solution here
    const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)\s*\/?>/g;

    const stack = [];
    let match;
    while((match = tagPattern.exec(html)) !== null){
        const tag = match[1];
        const firstChar = html[match.index+1];
        if(firstChar === '/'){
            if (stack.length === 0 || stack.pop() !== tag){
                return false;
            }
        } else {
            const lastChar = html[match.index + match[0].length - 2];
            if(lastChar !== '/') {
                stack.push(tag);
            }
        }
    }

    return stack.length === 0;

}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>')); // true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>')); // false
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>')); // true
