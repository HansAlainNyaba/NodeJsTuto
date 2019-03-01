const request = require('request');

var darkKey = '72db42f9424288cb51da5b57f37eaa33';

var getWeather =({latitude, longitude}, callback) => {
    request({
    url: `https://api.darksky.net/forecast/${darkKey}/${latitude},${longitude}`,
    json: true
}, (error, response, body) => {
    //console.log(JSON.stringify(body,undefined,2));
    if(error){
        callback("Unable to connect to darksky server: invalid link");
    }else if (body ==="Forbidden\n") {
        callback('Unable to connect to darksky server: invalid API key',null);
    } else if (body.code === 400) {
        callback(body.error,null);
    } else {
        callback(null,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
        });
    }
});
}

module.exports = {
  getWeather
}