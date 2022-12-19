"use strict";
const BodyLoad = function () {
  document.querySelector('body').className = 'load';
  return;
}
window.onload = function() {
  load();
  BodyLoad();
  return;
};