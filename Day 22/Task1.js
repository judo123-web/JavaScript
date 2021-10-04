
function send(url) {
    return new Promise(function(resolve,reject) {
        get(url, (error, meta, body) => {
            if (meta.status === 200) resolve(JSON.parse(body));

            else {
                reject(`We have error, status code: ${meta.status}`)
            }
        });
    })
}



const get = require('fetch').fetchUrl;
const url = 'https://api.openweathermap.org/data/2.5/weather?q=dvani&appid=299fb2133133f9d8fc214f5ae28ca753';
send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });




