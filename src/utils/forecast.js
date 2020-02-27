const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7253cb79c9dc53eb2545a337027c0abb/' + latitude + ',' + longitude
    
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degree out. This high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is ${body.currently.precipProbability} % chance of rain. `)
        }
    })
}


module.exports = forecast