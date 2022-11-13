"use strict";
let banner;
const bannerTimeout = function() {
  clearTimeout(banner);
  banner = setTimeout(bannerWH , 50);
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
  let banner = document.querySelector('.banner').style = 'background-image  :url("images/banner.jpg");';
}
window.onload = function() {
  Img();
  bannerWH();
  return;
};
window.onresize = function() {
  bannerTimeout();
  return;
}