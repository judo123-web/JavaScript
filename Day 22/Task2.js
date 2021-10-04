class Countries {
    constructor(url) {
        if (typeof url !== 'string') {
            throw new Error("URL should be a string")
        }
        else this.url = url
    }

    send(city) {
        if (typeof city !== 'string') {
            throw new Error("City should be a string")
        }
        var url1 = this.url.substr(0, 50)
        var url2 = this.url.substr(50)
        const url = `${url1}${city}${url2}`

        return new Promise(function (resolve, reject) {
            get(url, (error, meta, body) => {
                if (meta.status === 200) resolve(JSON.parse(body).sys);

                else {
                    reject(`We have error, status code: ${meta.status}`)
                }
            })
        })
    }
}




const get = require('fetch').fetchUrl;

const url = 'https://api.openweathermap.org/data/2.5/weather?q=&appid=299fb2133133f9d8fc214f5ae28ca753';
const countries = new Countries(url);



(async () => {
    try {
        const data = await countries.send("Gori");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();

