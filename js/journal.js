function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var splitWords = this.body.split(" ");
  return splitWords.length;
}

Entry.prototype.countVowelsAndCons = function () {
  var vowelsCount = this.body.match(/[aeiouy]/gi).length;
  var consonantsCount = this.body.match(/[bcdfghjklmnpqrstvxzw]/gi).length;

  return {
    vowels: vowelsCount,
    consonants: consonantsCount
  };
}

Entry.prototype.getTeaser = function () {
  var sentences = this.body.split(".");
  return sentences[0];
}

exports.entryModule = Entry;
