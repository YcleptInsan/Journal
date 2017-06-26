"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    function Entry(title, body) {
      this.title = title;
      this.body = body;
    }

    Entry.prototype.wordCount = function () {
      return this.body.split(" ").length;
    };

    Entry.prototype.countVowelsAndCons = function () {
      return {
        vowels: this.body.match(/[aeiouy]/gi).length,
        consonants: this.body.match(/[bcdfghjklmnpqrstvxzw]/gi).length
      };
    };

    Entry.prototype.getTeaser = function () {
      return this.body.split(".")[0] + '.';
    };

    exports.entryModule = Entry;
  }, {}], 2: [function (require, module, exports) {
    var Entry = require('./../js/journal.js').entryModule;

    $(function () {
      $("#output").hide();
      $("#journal-form").submit(function (event) {
        event.preventDefault();
        var title = $("#entry-title").val();
        var body = $("#entry-body").val();
        var newEntry = new Entry(title, body);
        // console.log(newEntry.body);
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

    $(function () {
      $("#time").text(moment());
    });
  }, { "./../js/journal.js": 1 }] }, {}, [2]);
