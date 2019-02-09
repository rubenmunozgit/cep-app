let lat, long, weoid, weatherData;
let iplocHost = 'https://www.ipgeolocationapi.com';
let weatherHost = 'https://www.metaweather.com';


function getAPIinfo() {
  fetch(iplocHost + '/api/geolocate')
    .then(function(response) {
      return response.json();
    })
    .then(function(loc) {
      lat = loc.geo.latitude;
      long = loc.geo.longitude;
      // get list of woeid stations based in the lat and long
      //console.log(weatherHost + '/api/location/search/?lattlong=' + lat + ',' + long);
      fetch('https://cors.io/?' + weatherHost + '/api/location/search/?lattlong=' + lat + ',' + long)
        .then(function(response) {
          return response.json();
        })
        .then(function(weather) {
          //console.log(JSON.stringify(weather[0]));
          //getwoeid station to gather the weather info
          weoid = weather[0].woeid;
          fetch('https://cors.io/?' + weatherHost + '/api/location/' + weoid + '/')
            .then(function(response) {
              return response.json();
            })
            .then(function(weatherPrediction) {
              weatherData = weatherPrediction;
            });
        });
    });
}
getAPIinfo();
