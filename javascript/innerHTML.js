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
  let bannerW = bannerDiv.clientWidth;
  bannerDiv.style.height = ((bannerW / 6000) * 3375) + 'px';
  return
}
const Img = function () {
  let logo = document.querySelector('.Logo-Img').src = 'images/logo.jpg';
  let Nav = document.querySelectorAll('.Navigation > ul > li > a > div > img');
  let NavImg = ['主页','主页','主页']
  let NavLength = Nav.length;
  for (let i = 0 ; i < NavLength; i++) {
    Nav[i].src = 'images/' + NavImg[i] + '.png';
  }
  let NavEnd = document.querySelectorAll('.Navigation > div.NavEnd > a > div > img');
  let NavEndImg = ['反馈','投稿','设置'];
  let NavEndLength = NavEnd.length;
  for (let i = 0 ; i < NavEndLength; i++) {
    NavEnd[i].src = 'images/' + NavEndImg[i] + '.png';
  }
  let banner = document.querySelector('.banner').style = 'background-image: linear-gradient(to top, rgba(52, 58, 64, 1), rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0)), url(images/banner.jpg)';
  return
}
const quotesSpan = function () {
  let arr = ['静,不是耳旁无声,而是心里无争.'];
  let arrLength = arr.length;
  let num = Math.floor(Math.random() * arrLength );
  quotes.innerHTML = '<span>' + arr[num] + '</span>';
  return quotesSpan;
}
window.onload = function() {
  setInterval(quotesSpan(),180000);
  Img();
  bannerWH();
  return;
};
window.onresize = function() {
  bannerTimeout();
  return;
}