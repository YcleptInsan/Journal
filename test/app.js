"use strict";
!function t(n, o, e) {
  function r(i, s) {
    if (!o[i]) {
      if (!n[i]) {
        var c = "function" == typeof require && require;if (!s && c) return c(i, !0);if (u) return u(i, !0);var l = new Error("Cannot find module '" + i + "'");throw l.code = "MODULE_NOT_FOUND", l;
      }var a = o[i] = { exports: {} };n[i][0].call(a.exports, function (t) {
        var o = n[i][1][t];return r(o || t);
      }, a, a.exports, t, n, o, e);
    }return o[i].exports;
  }for (var u = "function" == typeof require && require, i = 0; i < e.length; i++) {
    r(e[i]);
  }return r;
}({ 1: [function (t, n, o) {
    var e = t("./../js/journal.js").entryModule;$(function () {
      $("#output").hide(), $("#journal-form").submit(function (t) {
        t.preventDefault();var n = $("#entry-title").val(),
            o = $("#entry-body").val(),
            r = new e(n, o),
            u = r.wordCount(),
            i = r.countVowelsAndCons(),
            s = r.getTeaser();$("#output").show(), $("#word-count").text(u), $("#vowel-count").text(i.vowels), $("#consonant-count").text(i.consonants), $("#tease").text(s);
      });
    });
  }, { "./../js/journal.js": 2 }], 2: [function (t, n, o) {
    function e(t, n) {
      this.title = t, this.body = n;
    }e.prototype.wordCount = function () {
      return this.body.split(" ").length;
    }, e.prototype.countVowelsAndCons = function () {
      return { vowels: this.body.match(/[aeiouy]/gi).length, consonants: this.body.match(/[bcdfghjklmnpqrstvxzw]/gi).length };
    }, e.prototype.getTeaser = function () {
      return this.body.split(".")[0];
    }, o.entryModule = e;
  }, {}] }, {}, [1]);
