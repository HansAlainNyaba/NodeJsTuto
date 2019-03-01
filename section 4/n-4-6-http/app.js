console.log('Starting app.js');
const _ = require('lodash');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

var lat = '45.466452';
var long = '-73.4815108';

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

geocode.GeocodeAddress(argv.a, (erroMessase, results1)=>{
  if(erroMessase){
    console.log('Error Errror:');
    console.log(erroMessase);
  }else if(results1){
    console.log('Good result:');
    console.log(results1.address);
    weather.getWeather(results1.latitude, results1.longitude, (erroMessase,results2)=>{
      if(erroMessase){
        console.log('Error Errror:');
        console.log(erroMessase);
      }else if(results2){
        console.log(`The temperature is:${results2.temperature} but feels like ${results2.apparentTemperature}`);
      }
    });
  }
});
