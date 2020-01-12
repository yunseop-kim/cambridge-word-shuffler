'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sentenceShuffler;
// example sentence: 캠브릿지 대학의 연구결과에 따르면, 한 단어 안에서 글자가 어떤 순서로 배열되어 있는지는 중요하지 않고, 첫 번째와 마지막 글자가 올바른 위치에 있는 것이 중요하다고 한다. 나머지 글자들은 완전히 엉망진창의 순서로 되어 있을지라도 당신은 아무 문제 없이 이것을 읽을 수 있다. 왜냐하면, 인간의 두뇌는 모든 글자를 하나하나 읽는 것이 아니라 단어 하나를 전체로 인식하기 때문이다.
function sentenceShuffler(sentence) {
  return sentence.split(' ').map(function (word) {
    return _shuffler(word);
  }).join(' ');
}

function _shuffler(word) {
  var len = word.length;
  var first = word[0];
  var last = word[len - 1];
  var middle = word.substring(1, len - 1).split('');
  if (/[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]/i.test(word)) {
    return _shuffler(word.substring(0, word.length - 1)) + last;
  }
  if (len > 3) {
    return '' + first + _shuffle(middle) + last;
  }
  return word;
}

function _shuffle(a) {
  var before = a.join('');
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }
  var shuffled = a.join('');
  return before === shuffled ? _shuffle(a) : shuffled;
}
