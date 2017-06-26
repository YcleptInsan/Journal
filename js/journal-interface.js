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
