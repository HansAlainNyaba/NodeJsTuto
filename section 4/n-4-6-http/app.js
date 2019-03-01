console.log('Starting app.js');
const _ = require('lodash');
const yargs = require('yargs');
const https = require('https');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');


const argv = yargs
    .options({
        a: {
            description: 'address of the location',
            demand: true,
            alias: 'address',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    const options = {
      hostname: 'cnn.com',
      port: 443,
      path: '/',
      method: 'GET'
    };
    
    const req = https.request(options, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', JSON.stringify(res.headers,undefined,2));
    
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    });
    
    req.on('error', (e) => {
      console.error(e);
    });
    req.end();


/*geocode.GeocodeAddress(argv, (erroMessase, results1)=>{
  if(erroMessase){
    console.log('Error Errror:');
    console.log(erroMessase);
  }else if(results1){
    console.log('Good result:');
    console.log(results1.address);
    weather.getWeather(results1, (erroMessase,results2)=>{
      if(erroMessase){
        console.log('Error Errror:');
        console.log(erroMessase);
      }else if(results2){
        console.log(`The temperature is:${results2.temperature} but feels like ${results2.apparentTemperature}`);
      }
    });
  }
});*/
