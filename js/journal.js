function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  let splitWords = this.body.split(" ");
  return splitWords.length;
};

Entry.prototype.countVowelsAndCons = function () {
  let vowelsCount = this.body.match(/[aeiouy]/gi).length;
  let consonantsCount = this.body.match(/[bcdfghjklmnpqrstvxzw]/gi).length;

  return {
    vowels: vowelsCount,
    consonants: consonantsCount
  };
};

Entry.prototype.getTeaser = function () {
  let sentences = this.body.split(".");
  return sentences[0];
};

exports.entryModule = Entry;
