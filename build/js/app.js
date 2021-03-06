(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "3d4617160cc59fbcbc0c653236a4f9db"

},{}],2:[function(require,module,exports){
function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

Entry.prototype.countVowelsAndCons = function() {
  return {
    vowels: this.body.match(/[aeiouy]/gi).length,
    consonants: this.body.match(/[bcdfghjklmnpqrstvxzw]/gi).length
  };
};

Entry.prototype.getTeaser = function() {
  return this.body.split(".")[0] + '.';
};

exports.entryModule = Entry;

},{}],3:[function(require,module,exports){
const apiKey = require('./../.env').apiKey;

function Weather() {

}

Weather.prototype.getWeather = function(city, displayHumidity) {
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

  .then(response => displayHumidity(city, response.main.humidity))

  .fail(error => $('.showWeather').text(error.responseJSON.message));
};

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
let Entry = require('./../js/journal.js').entryModule;

$(function() {
  $("#output").hide();
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    let title = $("#entry-title").val();
    let body = $("#entry-body").val();
    let newEntry = new Entry(title, body);
    // console.log(newEntry.body);
    let wordCount = newEntry.wordCount();
    let consAndVowels = newEntry.countVowelsAndCons();
    let teaser = newEntry.getTeaser();
    $("#output").show();
    $("#word-count").text(wordCount);
    $("#vowel-count").text(consAndVowels.vowels);
    $("#consonant-count").text(consAndVowels.consonants);
    $("#tease").text(teaser);
  });
});

$(function() {
  $("#time").text(moment());
});

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

},{"./../js/journal.js":2,"./../js/weather.js":3}]},{},[4]);
