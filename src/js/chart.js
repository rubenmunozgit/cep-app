var minTemp = [],
  maxTemp = [],
  labelDates = [],
  city, country, currentTemp, currentState, currentTime, currentRise, currentDown,
  currentWindSpeedMPH, currentWindSpeedKmH,
  currentWindDir, currentHumidity,
  currentAccuracy;
//$(document).ready(function() {
moment.updateLocale('en', {
    calendar : {
        sameDay : '[Today]',
        nextDay : '[Tomorrow]',
        nextWeek: 'dddd'
    }
});
console.log(weatherData);
setTimeout(drawGraph, 8000); //wait untll weatherData is available to draw in the html
function prepareData() {
  city = weatherData.title;
  country = weatherData.parent.title;
  currentTemp = weatherData.consolidated_weather[0].the_temp.toFixed(1);
  currentState = weatherData.consolidated_weather[0].weather_state_name;
  currentWindSpeedMPH = weatherData.consolidated_weather[0].wind_speed.toFixed(1);
  currentWindSpeedKmH = (currentWindSpeedMPH*1.609344).toFixed(1);
  currentWindDir = weatherData.consolidated_weather[0].wind_direction_compass;
  currentHumidity = weatherData.consolidated_weather[0].humidity;
  currentAccuracy = weatherData.consolidated_weather[0].predictability;
  currentTime = moment(weatherData.time).utcOffset(weatherData.time).format('LLLL');
  currentRise = moment(weatherData.sun_rise).utcOffset(weatherData.sun_rise).format('HH:mm');
  currentDown = moment(weatherData.sun_set).utcOffset(weatherData.sun_set).format('HH:mm');
  for (let i = 0; i < weatherData.consolidated_weather.length; i++) {
    minTemp.push(weatherData.consolidated_weather[i].min_temp.toFixed(2));
    maxTemp.push(weatherData.consolidated_weather[i].max_temp.toFixed(2));
    labelDates.push(moment(weatherData.consolidated_weather[i].applicable_date).calendar());
  }

}

function setCardwithData() {
  $("#cityCountry").text(city + ', '+ country);
  $("#currentTemp").text(currentTemp + '°');
  $("#currentState").text(currentState);
  $("#currentTime").text(currentTime);
  $("#wind_speed").text(currentWindSpeedMPH + 'MPH - ' + currentWindSpeedKmH + 'Km/h');
  $("#wind_direcc").text(currentWindDir);
  $("#humidity").text(currentHumidity);
  $("#predictability").text(currentAccuracy);
  $("#sunrise").text(currentRise);
  $("#sunset").text(currentDown);
}

function drawGraph() {
  $("#checkWeather").addClass('bg-success');
  console.log(weatherData);
  // Get info from weatherData (I can't separate in a function due to setTimeout)
  prepareData();
  setCardwithData();
  var ctx = $("#myChart");
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labelDates,
      datasets: [{
        label: 'Max Temp',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
        fill: false,
        data: maxTemp
      }, {
        label: 'Min Temp',
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)',
        fill: false,
        data: minTemp
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: true,
        text: 'Weather Forecast'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Days'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Temp'
          }
        }]
      }
    }
  });
}

//});
