const apiKey = require('./../.env').apiKey;

function Weather() {

}

Weather.prototype.getWeather = function(city, displayHumidity) {
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

  .then(response => displayHumidity(city, response.main.humidity))

  .fail(error => $('.showWeather').text(error.responseJSON.message));
};

exports.weatherModule = Weather;
