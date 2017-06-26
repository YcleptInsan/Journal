const apiKey = '3d4617160cc59fbcbc0c653236a4f9db';

$(() => {
  $("#weather-location").click(() => {
    let city = $("#location").val();
    $("#location").val('');
    
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

    .then(response => $('.showWeather').text(`The humidity in ${city} is ${response.main.humidity}%`))

    .fail(error => $('.showWeather').text(error.responseJSON.message));
  });
});
