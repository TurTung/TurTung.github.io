"use strict";
let inputItem;
const item = document.querySelector('.num-item');
let ElectronicWoodFish = JSON.parse(localStorage.getItem('ElectronicWoodFish')) || data();
const data = () => {
  return {
    'auto' : {
      'value' : false ,
      'time' : 1000 ,
      'setTime' : -1 ,
    } ,
    'title' : '功德' ,
    'num' : 1 ,
    'value' : 0 ,
  }
}
document.querySelector('#settingUp').onclick = () => {
  if (document.querySelector('#setting-title').value == '' || undefined) {
    return alert('文字不能为空');
  }
  ElectronicWoodFish.title = document.querySelector('#setting-title').value;
  ElectronicWoodFish.num = Number(document.querySelector('#setting-num').value);
  document.querySelector('.num-title').innerHTML =ElectronicWoodFish.title;
  return document.querySelector('.num-title').innerHTML =ElectronicWoodFish.title;;
}
document.querySelector('#resetUp').onclick = () => {
  ElectronicWoodFish = data();
  load();
}
const input = function (item) {
  inputItem = document.querySelector(String( 'input#' + item.className));
  if (inputItem.checked) {
    setTimeout('inputItem.checked = false'
    , 0)
  }
return
}
const WoodFishClick = function (num) {
  ElectronicWoodFish.value = ElectronicWoodFish.value + num;
  item.textContent = ElectronicWoodFish.value.toLocaleString();
  return Number(ElectronicWoodFish.value);
}
document.querySelector('.wood-fish > img').onclick = () => {return WoodFishClick(ElectronicWoodFish.num)};
const initialize = () => {
  ElectronicWoodFish.value = Number(ElectronicWoodFish.value);
  ElectronicWoodFish.num = Number(ElectronicWoodFish.num);
  ElectronicWoodFish.auto.value = Boolean(ElectronicWoodFish.auto.value);
  ElectronicWoodFish.auto.time = Number(ElectronicWoodFish.auto.time);
  ElectronicWoodFish.auto.setTime = Number(ElectronicWoodFish.auto.setTime);
}
const load = () => {
  initialize();
  item.textContent = ElectronicWoodFish.value.toLocaleString();
  let setting = [document.querySelector('#setting-title') , document.querySelector('#setting-num')]
  setting[0].value = ElectronicWoodFish.title;
  setting[1].value = ElectronicWoodFish.num;
  document.querySelector('.num-title').innerHTML =ElectronicWoodFish.title;
  return Number(ElectronicWoodFish.value);
}
load();
window.onbeforeunload = function () {
  localStorage.setItem('ElectronicWoodFish' , JSON.stringify(ElectronicWoodFish));
  return
}