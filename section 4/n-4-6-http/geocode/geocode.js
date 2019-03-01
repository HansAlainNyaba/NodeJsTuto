console.log('loading geocode.js');
const request = require('request');

var GeocodeAddress = ({address}, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDtNIi1Jx303DukwQF3i6vLwTg2IKe1Qjg`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to google server',null);
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address',null);
        } else if (body.status === 'REQUEST_DENIED') {
            callback(body.error_message,null);
        } else if (body.status === 'OK') {
            //console.log(JSON.stringify(body,undefined,2));
            callback(null,{
                address:body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng});
            }


    });
}

module.exports = {
    GeocodeAddress,
    }