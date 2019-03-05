const request = require('request')

const geocode = (address, callback) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDtNIi1Jx303DukwQF3i6vLwTg2IKe1Qjg`
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } 
        else {
            callback(undefined, {
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
                location: body.results[0].formatted_address
            })
        }
    })
}

module.exports = geocode