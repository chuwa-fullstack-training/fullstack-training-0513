// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const regex = /(?<tag><\/?(?<tagName>[a-z]+|[a-z]+[a-z0-9]*)>)/gim;
    const stack = [];
    let match;
    
    while((match = regex.exec(html)) !== null){
        const tag = match.groups.tag;
        const tagName = match.groups.tagName;
        if (tag.startsWith("</")){
            if (stack.length === 0 || stack.pop() !== tagName) {
                return false;
            }
        }
        else{
            stack.push(tagName);
        }
    }
    return stack.length === 0;
}