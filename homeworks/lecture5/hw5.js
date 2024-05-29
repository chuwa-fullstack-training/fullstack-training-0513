// change http request into promise-based function

const https = require('https');

// function httpsRequest(url) {
//   const options = {
//     headers: {
//       'User-Agent': 'request'
//     }
//   };
//   const request = https.get(url, options, response => {
//     if (response.statusCode !== 200) {
//       console.error(
//         `Did not get an OK from the server. Code: ${response.statusCode}`
//       );
//       response.resume();
//     }

//     let data = '';
//     response.on('data', chunk => {
//       data += chunk;
//     });
//     response.on('end', () => {
//       try {
//         // When the response body is complete, we can parse it and log it to the console
//         console.log(JSON.parse(data));
//       } catch (e) {
//         // If there is an error parsing JSON, log it to the console and throw the error
//         throw new Error(e.message);
//       }
//     });
//   });
//   request.on('error', err => {
//     console.error(
//       `Encountered an error trying to make a request: ${err.message}`
//     );
//   });
// }

// function getJSON(url) {
//   // implement your code here
// }

// getJSON('https://api.github.com/search/repositories?q=javascript')
//   .then(response => console.log(response.items.length)) // output: 30
//   .catch(err => console.log(err)); // if you remove options from https.get parameters, you might see an error




const https = require('https');

function getJSON(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'request'
            }
        };

        const request = https.get(url, options, response => {
            if (response.statusCode !== 200) {
                reject(new Error(`Did not get an OK from the server. Code: ${response.statusCode}`));
                return response.resume(); // Consume response data to free up memory
            }

            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData); // Resolve the promise with the parsed data
                } catch (e) {
                    reject(new Error(`Error parsing JSON: ${e.message}`)); // Reject the promise if error occurs
                }
            });
        });

        request.on('error', err => {
            reject(new Error(`Encountered an error trying to make a request: ${err.message}`));
        });
    });
}

// 使用示例
getJSON('https://api.github.com/search/repositories?q=javascript')
    .then(response => {
        console.log(response.items.length); // 此处假设API返回了预期的数据结构
    })
    .catch(err => console.log(err));
