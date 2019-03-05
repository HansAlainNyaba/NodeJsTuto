const request = require('request')

var darkKey = '72db42f9424288cb51da5b57f37eaa33';

const forecast = ({latitude, longitude}, callback) => {
    const url: `https://api.darksky.net/forecast/${darkKey}/${latitude},${longitude}`,

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast