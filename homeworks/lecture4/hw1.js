// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    let i = 0;
    html =  html.replace(/\s/g, "")
    let intag = false, lastpos = 0, closing = false;
    let stack = [];
    while (i < html.length) {
        if (html[i] === "<") {
            intag = true;
            lastpos = i + 1;
        } else if (html[i] === "/") {
            if (intag) { 
                closing = true;
                lastpos = i + 1; 
            }
        } else if (html[i] === ">") {
            if (!closing) { stack.push(html.substring(lastpos, i)); }
            else {
                let clo = html.substring(lastpos, i);
                if (stack.length === 0 || stack[stack.length - 1] !== clo) {
                    return false;
                }
                stack.pop();
            }
            intag = false;
            closing = false;
        }
        ++i; 
    }
    if (intag) {
        if (!closing) { stack.push(html.substring(lastpos, html.length)); }
        else {
            let clo = html.substring(lastpos, html.length);
            if (stack.length === 0 || stack[stack.length - 1] !== clo) {
                return false;
            }
            stack.pop();
        }
        intag = false;
        closing = false;
    }
    return stack.length === 0;
}

console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></html"));
