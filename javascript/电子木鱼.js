"use strict";
let ElectronicWoodFish = JSON.parse(localStorage.getItem('ElectronicWoodFish')) || {
  'auto' : {
    'value' : 'false' ,
    'time' : 1000 ,
    'setTime' : -1 ,
  } ,
  'title' : '功德' ,
  'num' : 1 ,
  'value' : 0 ,
}
const item = document.querySelector('.num-item');
const WoodFishClick = function (num) {
  ElectronicWoodFish.value = ElectronicWoodFish.value + num ;
  item.textContent = ElectronicWoodFish.value.toLocaleString();
}
document.querySelector('.wood-fish > img').onclick = () => {return WoodFishClick(ElectronicWoodFish.num)};
const load = () => {
  item.textContent = ElectronicWoodFish.value.toLocaleString();
  let setting = [document.querySelector('#setting-title') , document.querySelector('#setting-num')]
  setting[0].value = ElectronicWoodFish.title;
  setting[1].value = ElectronicWoodFish.num;
  return
}
load();
window.onbeforeunload = function () {
  localStorage.setItem('ElectronicWoodFish' , JSON.stringify(ElectronicWoodFish));
  return
}