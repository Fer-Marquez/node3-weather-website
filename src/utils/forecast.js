const request = require('request')

const forecast = (latitude, longitude, callback) => {
 const url = 'https://api.weatherstack.com/current?access_key=964bbffad0d097a89e0b3a70e2a6a15f&query=' + latitude + ',' + longitude 
 request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humedity + "%")
        }
    })
}

module.exports = forecast