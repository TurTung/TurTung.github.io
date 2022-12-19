"use strict";
let banner;
const quotes = document.querySelector('.quotesSpan');
const bannerTimeout = function() {
  clearTimeout(banner);
  banner = setTimeout(bannerWH , 50);
  return
}
const bannerWH = function () {
  let bannerDiv = document.querySelector('.banner');
  let bannerW = bannerDiv.clientWidth || (document.querySelector('.BodyLoad').clientWidth) - 150;
  bannerDiv.style.height = ((bannerW / 6000) * 3375) + 'px';
  return
}
// const Img_1 = function () {
//   let logo = document.querySelector('.Logo-Img').src = 'images/logo.jpg';
//   let Nav = document.querySelectorAll('.Navigation > ul > li > a > div > img');
//   let NavImg = ['主页','官网','档案','消磨']
//   let NavLength = Nav.length;
//   for (let i = 0 ; i < NavLength; i++) {
//     Nav[i].src = 'images/' + NavImg[i] + '.png';
//   }
//   let NavEnd = document.querySelectorAll('.Navigation > div.NavEnd > a > div > img');
//   let NavEndImg = ['反馈','投稿','设置'];
//   let NavEndLength = NavEnd.length;
//   for (let i = 0 ; i < NavEndLength; i++) {
//     NavEnd[i].src = 'images/' + NavEndImg[i] + '.png';
//   }
//   let HeadRight = document.querySelectorAll('.headRight > div > img');
//   let HeadRightImg = ['说明','通知','分享'];
//   let HeadRightLength = HeadRight.length;
//   for (let i = 0 ; i < HeadRightLength; i++) {
//     HeadRight[i].src = 'images/' + HeadRightImg[i] + '.png';
//   }
//   let banner = document.querySelector('.banner').style = 'background-image: linear-gradient(to top, rgba(52, 58, 64, 1), rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0)), url(images/banner.jpg)';
//   return
// }
const Img = function () {
  let Img = document.querySelectorAll('img');
  let Img_Length = Img.length;
  for ( let i = 0 ; i < Img_Length; i++ ) {
    console.log(Img[i].alt + '---已加载')
    Img[i].src = Img[i].alt;
  }
  return document.querySelector('.banner').style = 'background-image: linear-gradient(to top, rgba(52, 58, 64, 1), rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0)), url(images/banner.jpg)';
}
const ItemText = function () {
  let Item = document.querySelectorAll('.item-text > span');
  let ItemLength = Item.length;
  for ( let i = 0 ; i < ItemLength ; i++ ) {
    Item[i].title = Item[i].innerText;
  }
}
const quotesSpan = function () {
  let arr = ['静,不是耳旁无声,而是心里无争.',
'或许今年的冬天更值得期待.',
'你有时间去试错,也有时间去止损,不应该拿时间去后悔.',
'岁寒,时深,添衣,勿病.',
'白日莫空过,青春不再来.',
'谁虚度了年华,青春就将褪色.',
'未来不足惧,过往不须泣.',
'终日乾乾,与时偕行.',
'明者因时而变，知者随事而制.',
'君子务本,本立而道生.',
'兼听则明,偏信则暗',
'尽信书,则不如无书.',
'款款独行,才不致倾溢.',
'凡事之本,必先治身.',
'不傲才以骄人,不以宠而作威.',
'万里星光,一如既往.',
'思考时,要像一位智者;但讲话时,要像一位普通人.'
];
  let arrLength = arr.length;
  let num = Math.floor(Math.random() * arrLength );
  quotes.innerHTML = '<span>' + arr[num] + '</span>';
  return;
}
let BodyLoad = function () {
  document.querySelector('body').className = 'load';
  return;
}
window.onload = function() {
  Img();bannerWH();quotesSpan();ItemText();
  BodyLoad();
  return;
};
window.onresize = function() {
  bannerTimeout();
  return;
}