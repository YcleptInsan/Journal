var Entry = require('./../js/journal.js').entryModule;

$(function() {
  $("#output").hide();
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#entry-title").val();
    var body = $("#entry-body").val();
    var newEntry = new Entry(title, body);
    var wordCount = newEntry.wordCount();
    var consAndVowels = newEntry.countVowelsAndCons();
    var teaser = newEntry.getTeaser();
    $("#output").show();
    $("#word-count").text(wordCount);
    $("#vowel-count").text(consAndVowels.vowels);
    $("#consonant-count").text(consAndVowels.consonants);
    $("#tease").text(teaser);
  });
});
