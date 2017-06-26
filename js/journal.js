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
