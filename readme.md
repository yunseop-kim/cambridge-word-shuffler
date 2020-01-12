# cambridge-word-shuffler
Inspired by [word superiority effect](http://www.mrc-cbu.cam.ac.uk/people/matt.davis/cmabridge/).

Just made for fun! Enjoy!

## Install
```
$ npm install cambridge-word-shuffler
```

## Usage
```js
const sentenceShuffler = require('cambridge-word-shuffler').default;

console.log(
  sentenceShuffler(
    `캠브릿지 대학의 연구결과에 따르면, 한 단어 안에서 글자가 어떤 순서로 배열되어 있는지는 중요하지 않고, 첫 번째와 마지막 글자가 올바른 위치에 있는 것이 중요하다고 한다. 나머지 글자들은 완전히 엉망진창의 순서로 되어 있을지라도 당신은 아무 문제 없이 이것을 읽을 수 있다. 왜냐하면, 인간의 두뇌는 모든 글자를 하나하나 읽는 것이 아니라 단어 하나를 전체로 인식하기 때문이다.`
  )
);
// 캠릿브지 대학의 연결구과에 따르면, 한 단어 안에서 글자가 어떤 순서로 배되열어 있지는는 중하요지 않고, 첫 번째와 마지막 글자가 올바른 위치에 있는 것이 중다요하고 한다. 나머지 글들자은 완전히 엉창망진의 순서로 되어 있지을라도 당신은 아무 문제 없이 이것을 읽을 수 있다. 왜하냐면, 인간의 두뇌는 모든 글자를 하하나나 읽는 것이 아니라 단어 하나를 전체로 인하식기 때이문다.
```
