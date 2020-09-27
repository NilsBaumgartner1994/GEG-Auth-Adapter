var base64 = require("base-64");
var fetch = require('node-fetch');
global.Headers = fetch.Headers;

module.exports.authorize = async function(username, password) {
    let url = 'https://studip.uni-osnabrueck.de/api.php/user/';
    let headers = new Headers();

    headers.append('Content-Type', 'text/json');
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: headers,
            });

            let user = await response.json();
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });


}