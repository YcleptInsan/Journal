function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = () => this.body.split(" ").length;

Entry.prototype.countVowelsAndCons = () => ({vowels: this.body.match(/[aeiouy]/gi).length, consonants: this.body.match(/[bcdfghjklmnpqrstvxzw]/gi).length});

Entry.prototype.getTeaser = () => this.body.split(".")[0];

exports.entryModule = Entry;
