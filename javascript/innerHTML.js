"use strict";
const head = () => {
  let head_innerHTMl = `<div>
  <a href="https://turtung.github.io" title="点击前往Github主页"> <!--https://github.com/TurTung-->
    <span class="GitHubGet">
      GitHub主页
    </span>
  </a>
</div>`
  document.querySelector('body > #framework > #head').innerHTML = head_innerHTMl;
  return;
}
const left = () => {
  let left_innerHTML = `<div class="Navigation">
  <input type="checkbox" id="Navigation-1" />
  <label for="Navigation-1">
    <img src="images/首页.png"/>
    <span>
      首页
    </span>
  </label>
  <div class="Navigation-Level">
    <div>
      主页
    </div>
    <div>
      简介
    </div>
  </div>
</div>
<div class="Navigation">
  <input type="checkbox" id="Navigation-2" />
  <label for="Navigation-2">
    <img src="images/开源.png"/>
    <span>
      开源
    </span>
  </label>
  <div class="Navigation-Level">
    <div>
      本站
    </div>
    <a href="开源.html">
      <div>
        <span>
          学识
        </span>
      </div>
    </a>
  </div>
</div>`
  document.querySelector('body > #framework > #left').innerHTML = left_innerHTML;
  return;
}
const footer = () => {
  let footer_innerHTML = `123`;
  document.querySelector('body > #framework > #footer').innerHTML = footer_innerHTML;
}
const innerHTML = () => {
  head();
  footer();
  left();
  return;
}
window.onload = function() {
  innerHTML();
  return;
};
window.onresize = function() {
  return;
}