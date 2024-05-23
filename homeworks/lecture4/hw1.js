// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    // REGEX
    const res = html.match(/<[^>]*>/g).reduce((acc, tag) => {
        if (acc < 0) return acc;
        if (tag[1] === '/') return acc - 1; 
        return acc + 1;
    }, 0) === 0;

    console.log(res);
}
checkValidHTML('<html><head><title>My Title</title></head></html');
checkValidHTML('<html><head><title>My Title</title></head></html>');