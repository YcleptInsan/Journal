(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let Entry = require('./../js/journal.js').entryModule;

$(function() {
  $("#output").hide();
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    let title = $("#entry-title").val();
    let body = $("#entry-body").val();
    let newEntry = new Entry(title, body);
    let wordCount = newEntry.countWords();
    let consAndVowels = newEntry.countVowelsAndCons();
    let teaser = newEntry.getTeaser();
    $("#output").show();
    $("#word-count").text(wordCount);
    $("#vowel-count").text(consAndVowels.vowels);
    $("#consonant-count").text(consAndVowels.consonants);
    $("#tease").text(teaser);
  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  let splitWords = this.body.split(" ");
  return splitWords.length;
}

Entry.prototype.countVowelsAndCons = function () {
  let vowelsCount = this.body.match(/[aeiouy]/gi);
  let consonantsCount = this.body.match(/[bcdfghjklmnpqrstvxzw]/gi);

  return {
    vowels: vowelsCount,
    consonants: consonantsCount
  };
}

Entry.prototype.getTeaser = function () {
  let sentences = this.body.split(".");
  return sentences[0];
}

exports.entryModule = Entry;

},{}]},{},[1]);
