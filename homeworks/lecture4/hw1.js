// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true
/*
Stack to keep track of tag
<html><head><title>My Title</title></head></html> 
if (current = stack.peek()) {
    stack.pop()
}
after all iterations, check whether the stack is empty or not
stack:[ ]

Question: How to find tags? -> Regular expressions
Time Complexity: O(n), Space Complexity: O(n) -> may store up to n elements (n is the length of the tag)
*/
function findTags(html) {
    const pattern = /<\/?([a-z]+)(?:\s[^>]*)?>?/g;
    const result = [];
    while ((match = pattern.exec(html)) !== null) {
        //console.log(match);
        result.push(match[0]);
    }
    return result; //[ '<html>', '<head>', '<title>', '</title>', '</head>', '</html>' ]
}
console.log(findTags('<html><head><title>My Title</title></head></html'));
function checkValidHTML(html) {
    // implement your solution here
    const list = findTags(html);
    const stack = [];
    for (const tag of list) {
        //Handle close tag
        if (tag.startsWith('</')) {
            const name = tag.slice(2,tag.indexOf('>') !== -1 ? tag.indexOf('>') : undefined);
            if (stack.length == 0 || stack.pop() !== name) {
                return false;
            }
        } else {
            stack.push(tag.slice(1,tag.indexOf('>')));
        }
    }
    return stack.length === 0;
}

//Test Cases:
//<html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true
console.log(checkValidHTML("<html><head><title>My Title</title></head></html>")); //Expected True
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>")); //Expected False
console.log(checkValidHTML("<html><head><title>My Title</title></head></html")); //Expected True
