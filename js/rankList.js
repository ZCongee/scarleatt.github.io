'use strict';

// console.log($('.time-score span').first());
console.log('test');
var app = new Vue({
  el: '#vueText',
  data: {
    message: '  ../'
  }
});

console.log(document.getElementById('vueText').innerHTML);

document.getElementById('VueImg').setAttribute('src', document.getElementById('vueText').value);