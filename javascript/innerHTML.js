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
window.onload = function() {
  bannerWH();
  return;
};
window.onresize = function() {
  bannerTimeout();
  return;
}