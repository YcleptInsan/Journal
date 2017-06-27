const Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = (city, humidityData) => $('.showWeather').text(`The humidity in ${city} is ${humidityData}%.`);

$(() => {
  let currentWeather = new Weather();
  $("#weather-location").click(() => {
    let city = $("#location").val();
    $("#location").val('');
    currentWeather.getWeather(city, displayHumidity);
  });
});
